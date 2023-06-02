
  let zminna1 = {
    data() {
        return {
          imgArr1: [
            { name: 'Aquanaut Luce “Rainbow” chronograph.1.jpg', title: 'фото 1' },
            { name: 'Aquanaut Luce “Rainbow” chronograph.2.jpg', title: 'фото 1' },
            { name: 'Aquanaut Luce “Rainbow” chronograph.3.jpg', title: 'фото 1' },
           
        ],
            i1: 0,


        }
    },
    methods: {
        next() {
          this.i1++
         if( this.i1 > this.imgArr1.length-1){
            this.i1=0
         }
        },
        prev() {
           this.i1--
            if (this.i1 < 0) {
                this.i1 = this.imgArr1.length-1;
            }
        }
    },
}
Vue.createApp(zminna1).mount('.my-slider1')


let zminna2 = {
  data() {
      return {
        imgArr2: [
          { name: 'Celestial, Moon age.1.jpg', title: 'фото 1' },
          { name: 'Celestial, Moon age.2.jpg', title: 'фото 1' },
          { name: 'Celestial, Moon age.3.jpg', title: 'фото 1' },
       
      ],
          i2: 0,


      }
  },
  methods: {
      next() {
        this.i2++
       if( this.i2 > this.imgArr2.length-1){
          this.i2=0
       }
      },
      prev() {
         this.i2--
          if (this.i2 < 0) {
              this.i2 = this.imgArr2.length-1;
          }
      }
  },
}
Vue.createApp(zminna2).mount('.my-slider2')


let zminna3 = {
    data() {
        return {
          imgArr3: [
            { name: 'Chronograph, Perpetual calendar.1.jpg', title: 'фото 1' },
            { name: 'Chronograph, Perpetual calendar.2.jpg', title: 'фото 1' },
            { name: 'Chronograph, Perpetual calendar.3.jpg', title: 'фото 1' },
          

        ],
            i3: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i3++
         if( this.i3 > this.imgArr3.length-1){
            this.i3=0
         }
        },
        prev() {
           this.i3--
            if (this.i3 < 0) {
                this.i3 = this.imgArr3.length-1;
            }
        }
    },
}
Vue.createApp(zminna3).mount('.my-slider3')


let zminna4 = {
    data() {
        return {
          imgArr4: [
{ name: 'Minute Repeater, Perpetual Calendar.1.jpg', title: 'фото 1' },
{ name: 'Minute Repeater, Perpetual Calendar.2.jpg', title: 'фото 1' },
{ name: 'Minute Repeater, Perpetual Calendar.3.jpg', title: 'фото 1' },
          

        ],
            i4: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i4++
         if( this.i4 > this.imgArr4.length-1){
            this.i4=0
         }
        },
        prev() {
           this.i4--
            if (this.i4 < 0) {
                this.i4 = this.imgArr4.length-1;
            }
        }
    },
}
Vue.createApp(zminna4).mount('.my-slider4')

let zminna9 = {
    data() {
        return {
          imgArr9: [
            { name: 'Minute repeater, Tourbillon.1.jpg', title: 'фото 1' },
            { name: 'Minute repeater, Tourbillon.2.jpg', title: 'фото 1' },
            { name: 'Minute repeater, Tourbillon.3.jpg', title: 'фото 1' },

           
        ],
            i9: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i9++
         if( this.i9 > this.imgArr9.length-1){
            this.i9=0
         }
        },
        prev() {
           this.i9--
            if (this.i9 < 0) {
                this.i9 = this.imgArr9.length-1;
            }
        }
    },
}
Vue.createApp(zminna9).mount('.my-slider9')

let zminna10 = {
    data() {
        return {
          imgArr10: [
            { name: 'Perpetual Calendar.1.jpg', title: 'фото 1' },
            { name: 'Perpetual Calendar.2.jpg', title: 'фото 1' },
            { name: 'Perpetual Calendar.3.jpg', title: 'фото 1' },
    
        ],
            i10: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i10++
         if( this.i10 > this.imgArr10.length-1){
            this.i10=0
         }
        },
        prev() {
           this.i10--
            if (this.i10 < 0) {
                this.i10 = this.imgArr10.length-1;
            }
        }
    },
}
Vue.createApp(zminna10).mount('.my-slider10')

$(window).ready(function(){
    $(".boton").wrapInner('<div class=botontext></div>');
        
        $(".botontext").clone().appendTo( $(".boton") );
        
        $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "25%").css("width", "+=3px");
    });

    function myFunction() {
        var x = document.getElementById("container-md");
        if (x.style.display === "block")  {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      } 


      function myFunction2() {
        var button = document.getElementById("show-more-btn");
      
        if (button.innerText === "Показати більше") {
          button.innerText = "Приховати";
        } else {
          button.innerText = "Показати більше";
        }
      }





