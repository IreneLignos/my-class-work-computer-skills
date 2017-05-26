// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Donkeys in the Santorini Kaldera', 		// this is the TITLE place in the class
				'http://mygreecetravelblog.com/2013/04/12/dont-ride-the-donkeys-why-tourists-should-avoid-taking-the-mule-taxis-on-santorini/',	// this is the LINK place in the class
				'Donny B',			// this is the AUTHOR place in the class
				'http://l7.alamy.com/zooms/91d0740e21bf4e0b995165a48db1dd1d/drover-on-donkey-at-the-top-of-the-caldera-at-thira-santorini-cyclades-cc8ktm.jpg',	// this is the IMAGE place in the class
				'Lorem ipsum dolor sit amet, consectetur.' // this is the BODY place in the class
				),

			new Post(
				'God Spaliaras',
				'https://en.wikipedia.org/wiki/Survivor_Greece_5',
				'Assorted Authors',
				'https://s-media-cache-ak0.pinimg.com/originals/7f/f5/6e/7ff56e46c23578d5aee39de14794ae0f.jpg', // this is a local image in the same folder as the js script
				'No explanation needed. '
				),

			new Post(
				'Rock Climbing in the Olympics in 2020',
				'https://www.climbing.com/news/climbing-officially-approved-for-2020-olympics/',
				'Kevin Corrigan',
				'https://s-media-cache-ak0.pinimg.com/originals/e0/a4/b1/e0a4b133a422891d0f7a0d08e6fe2750.jpg',
				'Rock climbing is finally in the Olympics.'
				),

			new Post(
				'Another Post: promptly judged',
				'https://vuejs.org',
				'Jane\' Author',
				'https://unsplash.it/200',
				'We promptly judged antique ivory buckles for the next prize.'
				),

			new Post(
				'Last Post: Jaded zombies',
				'https://google.com',
				'Anptoght Author',
				'#',
				'Jaded zombies acted quaintly but kept driving their oxen forward.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



