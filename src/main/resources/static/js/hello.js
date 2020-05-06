// ********** JQuery - Ajax  ************************

$(document).ready(function () {
    $('#butt_id').on('click', function () {

        let gdParam = {
            inputTxt: null,
            outTxt: null,

            startR: null,
            sizeR: null,
            stepR: null,
            targetR: null,
            replaceR: null,


            startC: null,
            sizeC: null,
            stepC: null,
            targetC: null,
            replaceC: null,

            positX: null,
            positY: null,
            width: null,
            height: null

        };


        gdParam.inputTxt = $('#inputTxt_id').val()
        gdParam.outTxt = $('#outTxt_id').val()

        gdParam.startR = $('#startR_id').val()
        gdParam.sizeR = $('#sizeR_id').val()
        gdParam.stepR = $('#stepR_id').val()
        gdParam.targetR = $('#targetR_id').val()
        gdParam.replaceR = $('#replaceR_id').val()


        gdParam.startC = $('#startC_id').val()
        gdParam.sizeC = $('#sizeC_id').val()
        gdParam.stepC = $('#stepC_id').val()
        gdParam.targetC = $('#targetC_id').val()
        gdParam.replaceC = $('#replaceC_id').val()

        gdParam.positX = $('#positX_id').val()
        gdParam.positY = $('#positY_id').val()
        gdParam.width = $('#width_id').val()
        gdParam.height = $('#height_id').val()

        $.ajax({
            type: "POST",
            url: "/data",
            // The key needs to match your method's input parameter (case-sensitive).
            data: JSON.stringify(gdParam, null, 2),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(dataX){
                let result = dataX.outTxt;
                $('#outTxt_id').val(result);
                },
            failure: function(errMsg) {
                alert(errMsg);
            }
        });


    });
});














// ****** Просто JQuery  ******

// $('document').ready(function () {
//     $('#butt_id').on('click', function () {
//         // alert('РАБОТАТЕТ');
//
//         var inputTxt, startR, sizeR, startC, sizeC
//
//         inputTxt = $('#inputTxt_id').val()
//
//         startR = $('#startR_id').val()
//         startR = parseInt(startR)
//
//         sizeR = $('#sizeR_id').val()
//         sizeR = parseInt(sizeR)
//
//         startC = $('#startC_id').val()
//         startC = parseInt(startC)
//
//         sizeC = $('#sizeC_id').val()
//         sizeC = parseInt(sizeC)
//
//         $('#outTxt_id').val(sort_R(inputTxt, startR, sizeR, startC, sizeC))
//     });
// });
//
//
// function sort_R(inputTxtp, startRp, sizeRp, startCp, sizeCp) { //
//     let row, column, allResult = ""
//
//     for (let r = startRp; r <= sizeRp; r++) {
//         row = inputTxtp.replace("R1", "R" + r)
//
//         for (let c = startCp; c <= sizeCp; c += 1) {
//             column = row.replace("C1", "C" + c);
//             allResult = allResult + column + "\n";
//         }
//     }
//     return (allResult)
// }