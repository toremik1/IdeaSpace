AFRAME.registerComponent('isvr-blog-post-nav-down', {

		schema: {
				id: {
            type: 'string'
        },
				cid: {
            type: 'number'
        },
				next_page_url: {
            type: 'string'
        },
				meters: {
            type: 'number'
        },
				posts_per_page: {
            type: 'number'
        },
				total_posts: {
            type: 'number'
        },
				post_counter: {
						type: 'number'
				}
		},
  

    init: function () {

				var self = this;

				var soundClick = document.querySelector('#sound-click');


				this.el.addEventListener('mouseenter', function(evt) {
						document.querySelector('#' + self.data.id).setAttribute('material', 'target', '#navigation-arrow-down-hover-texture');
        });

        this.el.addEventListener('mouseleave', function() {
						document.querySelector('#' + self.data.id).setAttribute('material', 'target', '#navigation-arrow-down-texture');
        });

				this.el.addEventListener('click', function() {

						//document.querySelector('#posts-wrapper').setAttribute('rotation', { x: 0, y: 0, z: 0 });

						// 1, 4, 7, 10, 13
						if (self.data.post_counter == 1 || self.data.post_counter == (prev_post_counter + 3)) {

								prev_post_counter = self.data.post_counter;

								// 3, 6, 9, 12, 15
								if (posts_loaded.indexOf(self.data.post_counter) == -1) {

										posts.load(self.data.next_page_url, self.data.meters, self.data.posts_per_page, self.data.total_posts, positions, (self.data.post_counter + 2));
										posts_loaded.push(self.data.post_counter);
								}
						}

						soundClick.components.sound.stopSound();
            soundClick.components.sound.playSound();

            document.getElementById('posts-wrapper').emit('nav_down_' + self.data.cid);
        });
		}

});


