// JavaScript Document
(function($){
	var KDANIMATE = function(){
		this.p = 10;
		this.z = 6;
		this.ps = [];
		this.zs = [];
		this.box = $('#playbox');
		this.phoneBox = this.box.find('.phonebox');
		this.clientBox = this.box.find('.clientbox');
		this.phoneWindow = this.box.find('.phonebox .phonebox-window');
		this.title = this.clientBox.find('.title');
		this.info = this.clientBox.find('.info');
		this.showImage = this.clientBox.find('.show-image');
		this.tipTop = this.box.find('.tip-top');
		this.tipBot = this.box.find('.tip-bot');
		this.finger = this.box.find('.finger');
		this.delaytime = 3000;
		this.install();
		this.tmp = null;
	};
	
	KDANIMATE.prototype.loadSingleImage = function(type, url, callback){
		var image = new Image(),
			that = this;
		image.onload = image.onerror = function(){
			that[type + 's'].push(this);
			callback();
		};
		image.src = url;
	};
	
	KDANIMATE.prototype.loadImages = function(type, i, callback){
		if ( i < this[type] ){
			var that = this;
			this.loadSingleImage(type, '/assets/animate/' + type + (i + 1) + '.png', function(){
				that.loadImages(type, i + 1, callback);
			});
		}else{
			callback();
		}
	}
	
	KDANIMATE.prototype.installBox = function(){
		var that = this;
		this.clientBox.css('zIndex', '1');
		this.box.css({ position: 'relative' }).parent().css('padding-top', '100px');
		this.phoneBox.css({
			width: '501px',
			height: '820px',
			background: "url('/assets/animate/p1.png')",
			position: 'relative',
			zIndex: '2'
		});
		this.phoneWindow.css({
			width: '261px',
			height: '460px',
			background: '#fff',
			position: 'absolute',
			top: '91px',
			left: '214px'
		});
		this.title.css({
			'text-align': 'center',
			color: '#444444',
			'font-size': '56px'
		});
		this.info.css('height', '150px');
		$(window).on('resize', function(){
			var width = $('.container').outerWidth();
			that.clientBox.css('width', (width - 501 - 30) + 'px');
		}).trigger('resize');
	}
	
	KDANIMATE.prototype.delay = function(callback, speed){
		var that = this;
		setTimeout(function(){
			callback.call(that);
		}, speed || this.delaytime);
	}
	
	KDANIMATE.prototype.play = function(){
		this.installBox();
		this.step1(function(){
			this.step2(function(){
				this.step3(function(){
					this.step4(function(){
						this.step5(function(){
							this.step6(function(){
								this.step7(function(){
									this.step8(function(){
										this.step9(function(){
											this.step10(function(){
												this.step11(function(){
													this.step12(function(){
														this.step13(function(){
															this.step14(function(){
																this.step15(function(){
																	this.step16(function(){
																		this.step17(function(){
																			var that = this;
																			setTimeout(function(){
																				that.showImage.empty();
																				that.info.css('height', '150px');
																				that.play();
																			}, 6000);
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}
	
	KDANIMATE.prototype.step1 = function(callback){

		this.phoneWindow.css({
			background: "url('/assets/animate/z1.png')"
		});
		this.title.html('多种叫车方式');
		this.showImage.append(this.ps[1]);
		
		callback.call(this);
	}
	
	KDANIMATE.prototype.step2 = function(callback){
		this.delay(function(){
			this.finger.show().css({
				background: "url('/assets/animate/p3.png')",
				width: '419px',
				height: '334px',
				position: 'absolute',
				bottom: '0px',
				left: '200px',
				zIndex: '99'
			});
			
			callback.call(this);
		});
	}
	
	KDANIMATE.prototype.step3 = function(callback){
		this.delay(function(){
			this.phoneWindow.hide('fast');
			this.finger.fadeOut('fast');
			this.info.html('<ul><li>一键打车</li></ul>')
			callback.call(this);
		}, 1000);
	}
	
	KDANIMATE.prototype.step4 = function(callback){
		this.delay(function(){
			this.finger.fadeIn('fast');

			callback.call(this);
		}, 2000);
	}
	
	KDANIMATE.prototype.step5 = function(callback){
		this.delay(function(){
			this.phoneWindow.show('fast');
			this.finger.fadeOut('fast');
			callback.call(this);
		}, 1000);
	}
	
	KDANIMATE.prototype.step6 = function(callback){
		var that = this;
		this.delay(function(){
			this.finger.fadeIn('fast', function(){
				$(this).animate({
					left: '300px'
				}, 'fast', function(){
					callback.call(that);
				});
			});
		}, 500);
	}
	
	KDANIMATE.prototype.step7 = function(callback){
		this.delay(function(){
			this.phoneWindow.css({
				background: "#fff url('/assets/animate/z2.png')"
			});
			this.finger.fadeOut('fast');
			this.tipTop.show().css({
				background: "url('/assets/animate/p4.png')",
				width: '342px',
				height: '244px',
				position: 'absolute',
				left: '335px',
				top: '-77px',
				zIndex: '98'
			});
			this.info.html('<ul><li>一键打车</li><li>文字发单</li></ul>')
			callback.call(this);
		}, 500);
	}
	
	KDANIMATE.prototype.step8 = function(callback){
		var that = this;
		this.delay(function(){
			this.tipTop.fadeOut('fast', function(){
				that.tipBot.css({
					background: "url('/assets/animate/p5.png')",
					width: '349px',
					height: '249px',
					position: 'absolute',
					left: '348px',
					bottom: '115px',
					zIndex: '98'
				});
				that.info.html('<ul><li>一键打车</li><li>文字发单 语音发单</li></ul>');
				callback.call(that);
			});		
		}, 2000);
	}
	
	KDANIMATE.prototype.step9 = function(callback){
		var that = this;
		this.delay(function(){
			that.tipBot.show().css({
					background: "url('/assets/animate/p6.png')"
			});
			setTimeout(function(){
				that.tipBot.css({
						background: "url('/assets/animate/p5.png')"
				});
				setTimeout(function(){
					that.tipBot.css({
							background: "url('/assets/animate/p6.png')"
					});
					callback.call(that);
				}, 500);
			}, 500);
		}, 500);
	}
	
	KDANIMATE.prototype.step10 = function(callback){
		var that = this;
		this.delay(function(){
			that.tipBot.fadeOut('fast', function(){
				that.finger.show().css({
					background: "url('/assets/animate/p7.png')",
					width: '627px',
					height: '700px',
					left: '411px'
				});
				callback.call(that);
			});
		}, 500);
	}
	
	KDANIMATE.prototype.step11 = function(callback){
		var that = this;
		this.delay(function(){
			that.finger.fadeOut('fast', function(){
				that.phoneWindow.css({
					background: "#fff url('/assets/animate/z3.png')"
				});
				callback.call(that);
			});
			
		}, 2000);
	}
	
	KDANIMATE.prototype.step12 = function(callback){
		var that = this;
		this.delay(function(){
			this.phoneWindow.css({
				background: "#fff url('/assets/animate/z1.png')"
			});
			that.info.html('<ul><li>一键打车</li><li>文字发单 语音发单</li><li>预约叫车</li></ul>');
			this.finger.css({
				background: "url('/assets/animate/p3.png')",
				width: '419px',
				height: '334px',
				position: 'absolute',
				bottom: '0px',
				left: '400px',
				zIndex: '99'
			}).fadeIn('fast', function(){
				callback.call(that);
			});
		});
	}
	
	KDANIMATE.prototype.step13 = function(callback){
		var that = this;
		this.delay(function(){
			this.phoneWindow.css({
				background: "#fff url('/assets/animate/z4.png')"
			});
			this.finger.fadeOut('fast', function(){
				callback.call(that);
			});			
		}, 500);
	}
	
	KDANIMATE.prototype.step14 = function(callback){
		var that = this;
		this.delay(function(){
			this.finger.css('left', '300px').fadeIn('fast', function(){
				callback.call(that);
			});			
		}, 500);
	}
	
	KDANIMATE.prototype.step15 = function(callback){
		var that = this;
		this.delay(function(){
			this.phoneWindow.css({
				background: "#fff url('/assets/animate/z3.png')"
			});
			this.title.html('一切尽在掌握');
			this.info.html('<ul><li>实时查看司机位置</li></ul>');
			this.showImage.empty().append(this.ps[7]);
			this.showImage.find('img').css('width', '427px').addClass('pull-right');
			this.finger.fadeOut('fast', function(){
				callback.call(that);
			});
		});
	}
	
	KDANIMATE.prototype.step16 = function(callback){
		var that = this;
		this.delay(function(){
			this.phoneWindow.css({
				background: "#fff url('/assets/animate/z5.png')"
			});
			this.title.html('从此告别零钱');
			this.info.html('<ul><li>在线付车费</li></ul>');
			this.showImage.empty().append(this.ps[8]);
			this.showImage.find('img').css('width', '468px').addClass('pull-right');
			callback.call(that);
		});
	}
	
	KDANIMATE.prototype.step17 = function(callback){
		var that = this;
		this.delay(function(){
			this.phoneWindow.css({
				background: "#fff url('/assets/animate/z6.png')"
			});
			this.title.html('玩转积分商城');
			this.info.html('');
			this.showImage.empty().append(this.ps[9]);
			this.showImage.find('img').css('width', '648px').css({
				position: 'absolute',
				bottom: '0px',
				right: '0px'
			});
			this.info.css('height', '0px');
			callback.call(that);
		});
	}
	
	KDANIMATE.prototype.install = function(){
		var that = this;
		this.loadImages('p', 0, function(){
			that.loadImages('z', 0, function(){
				//that.installBox();
				that.play();
			});
		});
	};
		
	new KDANIMATE();
})(jQuery);