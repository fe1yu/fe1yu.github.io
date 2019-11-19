const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio:[
	{
		name: "为你我受冷风吹",
        artist: '胡彦斌',
        url: 'https://sharefs.yun.kugou.com/201911192316/a4e0abb06a311c9d6c6e14f4bac01ae9/G013/M0A/10/19/TQ0DAFUPcDuAIA4nAERk5sw7iwE189.mp3',
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
		cover: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_440616&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
	}
]
});