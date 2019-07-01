import Vue from 'vue'
import VueAWN from 'vue-awesome-notifications'
import 'vue-awesome-notifications/dist/styles/style.css'

const options = {
	labels: {
		tip: "Dấu hiệu",
		info: 'Thông báo!',
		success: 'Thành công!',
		warning: 'Cảnh báo!',
		alert: 'Lỗi!',
		async: 'Đang nạp...',
		confirm: 'Bạn có chắc chưa?',
		okLabel: 'OK',
		cancelLabel: 'Thoát!',
	}
}

Vue.use(VueAWN, options)