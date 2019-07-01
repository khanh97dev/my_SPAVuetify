<template>
  <vue-dropzone
    ref="myVueDropzone"
    id="dropzone"
    :options="dropzoneOptions"
    @vdropzone-success="dropSuccess">
  </vue-dropzone>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    vueDropzone: vue2Dropzone
  }, // components
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        acceptedFiles: ".xlsm, .xls, .xlsx, .csv",
        thumbnailWidth: 50,
        addRemoveLinks: true,
        thumbnailHeight: 40,
        resizeHeight: 40,
        dictDefaultMessage: "Chọn file",
        dictRemoveFile: 'Loại bỏ file',
        maxFiles: 5,
        parallelUploads: 1,
        parallelChunkUploads: false,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  }, // data
  methods: {
    dropSuccess(files, response) {
      this.$emit("dropSuccess", files);
    }
  } // methods
};
</script>