<template>
	<div>
		<div class="Xiangce">
			<div class="Xiangce_top">
				<router-link to="../wode/">
					<img class="Xc_arrow" src="../../assets/images/left.png" alt="" />
				</router-link>
				<img  class="Huang" src="../../assets/images/2-1.png" />
				<p>卑鄙的我</p>
				<h6><a href="#">关注&nbsp;12</a><a href="#">粉丝&nbsp;25</a></h6>
				<img class="Qianbi" src="../../assets/images/2-5.png" />
			</div>
			<div class="Xiangce_con">
				<ul>
					<li>
						<router-link :to="{path:'/dongtai'}">动态</router-link>
					</li>
					<li>
						<router-link :to="{path:'/xiangce'}">相册</router-link>
					</li>
					<li>
						<router-link :to="{path:'/guanzhu'}">关注</router-link>
					</li>
					<li>
						<router-link :to="{path:'/fensi'}">粉丝</router-link>
					</li>
				</ul>
			</div>
			<div class="Xiangce_foot">
				<p>04月</p>
				<div class="tupian">
					<ul>
						<li>
							<img src="../../assets/images/4-3.png" alt="" />
							<img src="../../assets/images/4-4.png" alt="" />
							<img src="../../assets/images/4-5.png" alt="" />

						</li>
					</ul>
				</div>
				<p>03月</p>
				<div class="tupian">
					<ul>
						<li>
							<img src="../../assets/images/4-3.png" alt="" />
							<img src="../../assets/images/4-5.png" alt="" />
							<img src="../../assets/images/4-6.png" alt="" />

						</li>
					</ul>
				</div>
				<p>02月</p>
				<div class="tupian">
					<ul>
						<li>
							<img src="../../assets/images/4-6.png" alt="" />
							<img src="../../assets/images/4-7.png" alt="" />
							<img src="../../assets/images/4-8.png" alt="" />

						</li>
					</ul>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: 'xiangce',
		data() {
			return {

			}
		}
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.Xiangce {
		.Xiangce_top {
			width: 100%;
			height: 500/75rem;
			background: url('../../assets/images/bghui.jpg');
			position: relative;
			.Xc_arrow{
				position: absolute;
				top: 28/75rem;
				left: 15/75rem;
			}
			.Huang {
				width: 202/75rem;
				height: 202/75rem;
				margin-top: 44/75rem;
				margin-left: 274/75rem;
				margin-bottom: 32/75rem;
			}
			.Qianbi {
				width: 198/75rem;
				height: 45/75rem;
				margin-left: 272/75rem;
				margin-top: 22/75rem;
				border-radius: 30/75rem;
			}
			p {
				text-align: center;
				font-size: 32/75rem;
				color: #000;
				font-weight: 700;
				margin-bottom: 22/75rem;
			}
			h6 {
				font-size: 23/75rem;
				text-align: center;
				a:first-child {
					margin-right: 75/75rem;
				}
			}
		}
		.Xiangce_con {
			padding: 20/75rem 0;
			background: #fff;
			ul {
				overflow: hidden;
				li {
					font-size: 35/75rem;
					float: left;
					margin-left: 58/75rem;
					margin-right: 55/75rem;
				}
			}
		}
		.Xiangce_foot {
			p {
				font-size: 20/75rem;
				height: 42/75rem;
				line-height: 42/75rem;
				padding-left: 14/75rem;
			}
			.tupian {
				width: 100%;
				ul li {
					img {
						width: 235/75rem;
						height: 235/75rem;
					}
					img:nth-child(2) {
						margin: 0 18/75rem;
					}
				}
			}
		}
	}
</style>