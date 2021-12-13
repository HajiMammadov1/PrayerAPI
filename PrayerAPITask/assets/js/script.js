

$(function() {
    $(document).on('click', "#btn", function() {
        getData(
            $('#year').find(':selected').val(),
            $('#month').find(':selected').val()
        )
    })

    async function getData(year, month) {
        $('.loader').fadeIn();
        $('.container').hide();
        let data = await fetch(`https://api.aladhan.com/v1/calendar?latitude=40&longitude=49&method=2&month=${month}&year=${year}`)
        .then(res=>res.json())
        .then(res=>res.data)
        createTable(data)
        $('.loader').fadeOut();
        $('.container').show();
    }

    function createTable(myArr) {
        $('tbody').empty();

        $.each(myArr, function(index, value) {
            $('tbody').append(`<tr>
            <th scope="row">${index+1}</th>
            <td>${value.timings.Fajr.split(" ")[0]}</td>
            <td>${value.timings.Sunrise.split(" ")[0]}</td>
            <td>${value.timings.Dhuhr.split(" ")[0]}</td>
            <td>${value.timings.Asr.split(" ")[0]}</td>
            <td>${value.timings.Sunset.split(" ")[0]}</td>
            <td>${value.timings.Maghrib.split(" ")[0]}</td>
            <td>${value.timings.Isha.split(" ")[0]}</td>
            <td>${value.timings.Imsak.split(" ")[0]}</td>
            <td>${value.timings.Midnight.split(" ")[0]}</td>
            </tr>`)
        })
    }
})

