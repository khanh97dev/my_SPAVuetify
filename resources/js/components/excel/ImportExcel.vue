<template>
  <vue-upload @dropSuccess="dropSuccess" />
</template>

<script>
import XLSX from "xlsx";
// import
export default {
  data() {
    return {
      url: "/api/excel/data",
      state: {
        tickets: "",
        headers: ""
      },
      excel: "Excel",
      isDrop: false
    };
  },
  methods: {
    get_header_row(sheet) {
      var headers = [],
        range = XLSX.utils.decode_range(sheet["!ref"]);
      var C,
        R = range.s.r; /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        var cell =
          sheet[
            XLSX.utils.encode_cell({ c: C, r: R })
          ]; /* find the cell in the first row */
        var hdr = "UNKNOWN " + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
    },
    fixdata(data) {
      var o = "",
        l = 0,
        w = 10240;
      for (; l < data.byteLength / w; ++l)
        o += String.fromCharCode.apply(
          null,
          new Uint8Array(data.slice(l * w, l * w + w))
        );
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    },
    workbook_to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetName]
        );
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      return result;
    },
    dropSuccess(files) {
      var vm = this;
      var data, i, f;
      var reader = new FileReader(),
        name = files.name;
      reader.onload = function(e) {
        var test;
        var results,
          data = e.target.result,
          fixedData = vm.fixdata(data),
          workbook = XLSX.read(btoa(fixedData), { type: "base64" }),
          firstSheetName = workbook.SheetNames[0],
          worksheet = workbook.Sheets[firstSheetName];
        vm.state.headers = vm.get_header_row(worksheet);
        results = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        vm.state.tickets = results;
      };
      reader.readAsArrayBuffer(files);
      setTimeout(function() {
        this.excel = "Up file thành công";
        this.isDrop = false;
        vm.$emit("uploaded", vm.state.tickets);
      }, 100);
    },
    /** PARSING and DRAGDROP **/
    handleDrop(e) {
      var vm = this;
      var data;
      e.stopPropagation();
      e.preventDefault();
      console.log(e.dataTransfer.files);
      var files = e.dataTransfer.files,
        i,
        f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
        console.log(files[i].name);
        var reader = new FileReader(),
          name = f.name;
        reader.onload = function(e) {
          var test;
          var results,
            data = e.target.result,
            fixedData = vm.fixdata(data),
            workbook = XLSX.read(btoa(fixedData), { type: "base64" }),
            firstSheetName = workbook.SheetNames[0],
            worksheet = workbook.Sheets[firstSheetName];
          vm.state.headers = vm.get_header_row(worksheet);
          results = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          vm.state.tickets = results;
        };
        reader.readAsArrayBuffer(f);
      }
      setTimeout(function() {
        this.excel = "Up file thành công";
        this.isDrop = false;
        vm.$emit("uploaded", vm.state.tickets);
      }, 100);
    },
    handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
      this.excel = "Up File Excel";
      this.isDrop = true;
    },
    handleDragEnd(e) {
      e.stopPropagation();
      e.preventDefault();
      this.excel = "Excel";
      this.isDrop = false;
    }
  }
};
</script>