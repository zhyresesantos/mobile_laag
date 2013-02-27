var myScroll;

            function loaded() {
                myScroll = new iScroll('wrapper', {
                    zoom: true
                });
            }

            document.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, false);

            document.addEventListener('DOMContentLoaded', loaded, false);
            $(document).ready(function () {
                $('.menu').hide();
                $('.options').click(function () {
                    $(this).toggleClass('active');
                    $('.menu').toggle();
                });

                var imgs = [
                    'images/thumbnails/scs.jpg',
                    'images/thumbnails/hostel.jpg',
                    'images/thumbnails/ids.jpg',
                    'images/thumbnails/cass.jpg',
                    'images/thumbnails/cba.jpg',
                    'images/thumbnails/iacet.jpg',
                    'images/thumbnails/coe.jpg',
                    'images/thumbnails/csm.jpg',
                    'images/thumbnails/gym.jpg',
                    'images/thumbnails/coop.jpg',
                    'images/thumbnails/ced.jpg',
                    'images/thumbnails/supplies.jpg',
                    'images/thumbnails/twincourt.jpg',
                    'images/thumbnails/alumni.jpg',
                    'images/thumbnails/field.jpg',
                    'images/thumbnails/maingate.jpg'];
                var cnt = imgs.length;

                $(function () {
                    setInterval(Slider, 3000);
                });

                function Slider() {
                    $('#imageSlide').fadeOut("slow", function () {
                        $(this).attr('src', imgs[(imgs.length++) % cnt]).fadeIn("slow");
                    });
                }
				var textArray = [
			'School Of Computer Studies.',
			'Hostel.',
			'Integrated Developmental School.',
			'College of Arts and Social Sciences.',
			'College of Business Administration and Accountancy.',
			'Industrial Automation and Control Engineering Technology .',
			'College of Engineering.',
			'College of Science and Mathematics.',
			'Gymnasium.',
			'Coop Academy.',
			'College of Education.',
			'Supplies Office.',
			'Twin Court.',
			'Bahay Alumni."',
			'Field.',
			'Main Gate.'
		];
		var count = textArray.length;

                $(function () {
                    setInterval(description, 3000);
                });

                function description() {
                    $('em').fadeOut("slow", function () {
                        $(this).html("The MSU - IIT " + textArray[(textArray.length++) % count]).fadeIn("slow");
                    });
                }
                $('#hide').click(function () {
                    document.getElementById('bg_mask').style.visibility = 'hidden';
                    document.getElementById('frontlayer').style.visibility = 'hidden';
                });
                $("area").click(function () {
                    document.getElementById('bg_mask').style.visibility = 'visible';
                    document.getElementById('frontlayer').style.visibility = 'visible';
                });
                var xref = {
                    maingate: "<img id='image' src='images/pic/maingate.jpg' width='297' height='300'/>",
                    clinic: "<img id='image' src='images/pic/clinic.jpg' width='297' height='300'/>",
                    scs: "<img id='image' src='images/pic/scs.jpg' width='297' height='300'/>",
                    csm: "<img id='image' src='images/pic/coe.jpg' width='297' height='300'/>",
                    gym: "<img id='image' src='images/pic/gym.jpg' width='297' height='300'/>",
                    coop: "<img id='image' src='images/pic/coop.jpg' width='297' height='300'/>",
                    twincourt: "<img id='image' src='images/pic/twincourt.jpg' width='297' height='300'/>",
                    alumni: "<img id='image' src='images/pic/alumni.jpg' width='297' height='300'/>",
                    field: "<img id='image' src='images/pic/field.jpg' width='297' height='300'/>",
                    volleyball: "<img id='image' src='images/pic/volleyball.jpg' width='297' height='300'/>",
                    mainlib: "<img id='image' src='images/pic/mainlib.jpg' width='297' height='300'/>",
                    admin: "<img id='image' src='images/pic/admin.jpg' width='297' height='300'/>",
                    mph: "<img id='image' src='images/pic/mph.jpg' width='297' height='300'/>",
                    ids: "<img id='image' src='images/pic/ids.jpg' width='297' height='300'/>",
                    hostel: "<img id='image' src='images/pic/hostel.jpg' width='297' height='300'/>",
                    cass: "<img id='image' src='images/pic/cass.jpg' width='297' height='300'/>",
                    ced: "<img id='image' src='images/pic/ced.jpg' width='297' height='300'/>",
                    supplyoffice: "<img id='image' src='images/pic/supplyoffice.jpg' width='297' height='300'/>",
                    coe: "<img id='image' src='images/pic/coe.jpg' width='297' height='300'/>",
                    cba: "<img id='image' src='images/pic/cba.jpg' width='297' height='300'/>",
                    iacet: "<img id='image' src='images/pic/iacet.jpg' width='297' height='300'/>",
                    set: "<img id='image' src='images/pic/set.jpg' width='297' height='300'/>"
                };

                $('#imagemap').mapster({
                    fillOpacity: 0.4,
                    fillColor: "d42e16",
                    strokeColor: "FF4500",
                    strokeOpacity: 0.8,
                    strokeWidth: 1,
                    mapKey: 'name',
                    listKey: 'name',
                    onClick: function (e) {
                        $('#selections').html(xref[e.key]);
                        $('#image').reel({
                            indicator: 5, // For no indicator just remove this line
                            stitched: 1821,
                            frames: 60,
                            frame: 23,
                            speed: -0.05,
                            clickfree: false,
                            wheelable: false
                        });
                    },
                });
            })