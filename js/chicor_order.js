
purchase();

function purchase(){
	var params = [];
	params.push({goosCode: "0000000007675", dpCode: "C3_1000019935613", odrQty: 1});
	
	$.ajax({
            url: '/order/purchase',
            method: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(params)
        })
        .done(function(data, status, request) {
	    console.log(data[0]);
            ready(data[0]);
        })
        .fail(function(xhr, status, errorThrown) {
            console.log('purchase phase fail');
        });

	
}

function ready(ordNos){
var params = {
            odrSbagNos: [ordNos], // �λ컮援щ땲踰덊샇��
            useCupIssuNos: [], // �ъ슜荑좏룿紐⑸줉
            sbagPrens: "", // �쇳븨諛깆궗���덉젙蹂�
            goosPrens: [], // �곹뭹�ъ��덉젙蹂�
            fulnm: "아무개", // 二쇰Ц�먮챸
            moblNo: "01091144403", // 紐⑤컮�쇰쾲��
            eml: "dummy@dummy.dummy", // �대찓��
            dlvtoNo:1429, // 諛곗넚吏�踰덊샇
            rcvrFulnm: "guest", // �섏떊�먮챸
            zipNo: "dummy", // �고렪踰덊샇
            zipAddr: "서울시 중랑구 면목 1동 123-12", // �고렪二쇱냼
            dtlAddr: "dummy", // �곸꽭二쇱냼
            rcvrMoblNo: "dummy", // �섎졊�먰빖�쒗룿
            dlvrMemo: "dummy", // 諛곗넚硫붾え
            nextSettWayCdYn: '', // �ㅼ쓬寃곗젣�섎떒�щ�
            settWayCd: "PCRDT",
            stfSaleYn: 0,
            ssgPoinAmt: 0,
            ssgPoinPwd: "",
            poinAmt: 16500,
            odrTotamt: 0,
            rlxNoUseYn: 'N'
        }


        $.ajax({
            url: '/order/ready',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(params)
        })
        .done(function(data, status, request) {
            
	    console.log('success!!!');
		poinpay();

			
        })
        .fail(function(xhr, status, errorThrown) {
            console.log('fail');
        });
}

function poinpay(){
	var params = {};
	$.ajax({
            url: '/order/poinpay',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(params)
        })
        .done(function(data, status, request) {
            
	    console.log('success!!!');
			
        })
        .fail(function(xhr, status, errorThrown) {
            console.log('fail');
        });
}
