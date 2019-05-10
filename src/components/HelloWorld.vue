<template>
	<div class="hello">
		<button @click="test">获取地理位置</button>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {}
		},
		methods: {
			test() {
				plus.geolocation.getCurrentPosition(function(p) {
						alert('Geolocation\nLatitude:' + p.coords.latitude + '\nLongitude:' + p.coords.longitude + '\nAltitude:' + p.coords.altitude);
					},
					function(e) {
						alert('Geolocation error: ' + e.message);
					});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>