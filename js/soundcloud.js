$(document).ready(function() {
     var widget = SC.Widget(document.getElementById('soundcloud_widget'));
     var song_indexes = new Array();
     var current_index = 0;

     //Shuffle function
     function shuffle(o){ //v1.0
      for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };

    function create_shuffled_indexes (num_songs) {
       for (var i=0;i<num_songs;i++) {
           song_indexes.push(i);
       }
       song_indexes = shuffle(song_indexes);
     }

     function play_next_shuffled_song() {
      current_index++;
      if (current_index >= song_indexes.length) {
          current_index = 0;
      }
      var track_number = song_indexes[current_index];
      widget.skip(track_number);
    }



     function ChangeToPause()
     {
       $('.btn-circle-play').find('i').removeClass('fa-play play');
       $('.btn-circle-play').find('i').addClass('fa-pause pause');
       $('.btn-circle-play').addClass('pause');
     }

     widget.bind(SC.Widget.Events.READY, function() {
       widget.getSounds(function(sounds) {
            create_shuffled_indexes(sounds.length);
            //alert("Lan");
        });



       console.log('Ready...');
     });

     widget.bind(SC.Widget.Events.FINISH, function() {
            play_next_shuffled_song();
            widget.getCurrentSound(function(sound) {
              //alert(sound.title)
              $('.intro-text').text(sound.title);
            });
        });

     $('.btn-circle-play').click(function() {

       widget.toggle();
       widget.getCurrentSound(function(sound) {
         //alert(sound.title)
         $('.intro-text').text(sound.title);
       });
     });
     $('.btn-circle-other .previous').click(function() {
       widget.prev();
       widget.getCurrentSound(function(sound) {
         //alert(sound.title)
         $('.intro-text').text(sound.title);
       });
       ChangeToPause();
     });
     $('.btn-circle-other .next').click(function() {
       play_next_shuffled_song();
       widget.getCurrentSound(function(sound) {
         //alert(sound.title)
         $('.intro-text').text(sound.title);
       });
       ChangeToPause();
     });
     //Soundcloud change mood
       $(".cmn-toggle-round").on("click", function(){
         if($(this).is(':checked') && $('.btn-circle-other').css('opacity') == 1){
           widget.load('https://soundcloud.com/deco_vn7/sets/papersortingmood-chill', {'auto_play' : true});

           ChangeToPause();

         }else if($(this).is(':checked') && $('.btn-circle-other').css('opacity') == 0){
           widget.load('https://soundcloud.com/deco_vn7/sets/papersortingmood-chill');

         } else if(!$(this).is(':checked') && $('.btn-circle-other').css('opacity') == 1){
           widget.load('https://soundcloud.com/deco_vn7/sets/papersortingmood', {'auto_play' : true});
           
           ChangeToPause();
         } else {
           widget.load('https://soundcloud.com/deco_vn7/sets/papersortingmood');
         }
         /////////
         widget.bind(SC.Widget.Events.READY, function() {
           widget.getSounds(function(sounds) {
                create_shuffled_indexes(sounds.length);
                //alert("Lan");
            });

            widget.getCurrentSound(function(sound) {
              //alert(sound.title)
              $('.intro-text').text(sound.title);
            });

           console.log('Ready...');
         });
         /////////
       });
     //End Soundcloud change mood
   });
