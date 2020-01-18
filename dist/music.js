const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio:[
	{
		name: "为你我受冷风吹",
        artist: '胡彦斌',
        url: 'http://m10.music.126.net/20200116193523/5d96a771cbcf64e6019e17613f0a8685/ymusic/ee6d/3a50/f87c/2a5d8ecccd61f1213528d69ed68900b9.mp3',
        cover: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034761545,3021885026&fm=58',
	},
	{
		name: "不要说话",
		artist: '陈奕迅',
		url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_382425&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
		cover: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3536685080,4260402198&fm=58&bpow=800&bpoh=800',
	},
	{
		name: "Who you",
		artist: 'GD',
		url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_27998551&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
		cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573923918497&di=0788ac2b6e76fe6d2789ee5589887731&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2017%2F03%2F20%2F2591556242688212487_320x320.jpg',
	},	
	{
		name: "空白格",
		artist: '杨宗纬',
		url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_22802952&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
		cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573844674962&di=f8a48c217ecb6be98e5d4f331d2076b3&imgtype=0&src=http%3A%2F%2Foss.tan8.com%2Fjtpnew%2F47%2F14147%2Fjtpnew20160105101847_big.jpg%3Fv%3D1491758395',
	},
	{
		name: "兰亭序",
		artist: '周杰伦',
		url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_440616&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
		cover: 'http://5b0988e595225.cdn.sohucs.com/images/20180118/0f13560c1e8f46a68ea1f0d404e6add0.jpeg',
	}	
	{
		name: "修罗",
		artist: 'DOES',
		url: 'http://m10.music.126.net/20200116192314/47e28ad50e4aed003f12a7e61ac1fea2/ymusic/eaae/1575/ab6f/b02882f925cc65e49fa73c7a0a2a5532.mp3',
		cover: 'http://p4.qhimg.com/dr/250_500_/t019b72bdc606953acf.jpg',
	}
]
});