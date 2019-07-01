<template>
	<div>
		<v-container grid-list-xs>
			<VTabs
				fixed-tabs
				slider-color="blue"
			>
				<VTab ripple to="/excel/bao-cao-ban-hangs/hien-thi">
					Hiển thị
				</VTab>
				<VTab ripple to="/excel/bao-cao-ban-hangs/xuat-file">
					Xuất file
				</VTab>
				<VTab ripple to="/excel/bao-cao-ban-hangs/xu-ly">
					Kiểm tra bán hàng và tồn kho
				</VTab>
			</VTabs>
		</v-container>
		<router-view></router-view>
	</div>
</template>