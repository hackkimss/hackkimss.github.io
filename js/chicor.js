
var params = {
            odrSbagNos: ["1"], // �λ컮援щ땲踰덊샇��
            useCupIssuNos: [], // �ъ슜荑좏룿紐⑸줉
            sbagPrens: "", // �쇳븨諛깆궗���덉젙蹂�
            goosPrens: [], // �곹뭹�ъ��덉젙蹂�
            fulnm: "abc", // 二쇰Ц�먮챸
            moblNo: "01012341234", // 紐⑤컮�쇰쾲��
            eml: "dummy@dummy.dummy", // �대찓��
            dlvtoNo:1429, // 諛곗넚吏�踰덊샇
            rcvrFulnm: "dummy", // �섏떊�먮챸
            zipNo: "dummy", // �고렪踰덊샇
            zipAddr: "dummy", // �고렪二쇱냼
            dtlAddr: "dummy", // �곸꽭二쇱냼
            rcvrMoblNo: "dummy", // �섎졊�먰빖�쒗룿
            dlvrMemo: "dummy", // 諛곗넚硫붾え
            nextSettWayCdYn: '', // �ㅼ쓬寃곗젣�섎떒�щ�
            settWayCd: "PCRDT",
            stfSaleYn: 0,
            ssgPoinAmt: 0,
            ssgPoinPwd: "",
            poinAmt: 0,
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
            // 紐⑤뱺 二쇰Ц湲덉븸�� �ъ씤�몃줈留� 寃곗젣�� 寃쎌슦
			console.log('success!!!');
	alert(data);
	
			
        })
        .fail(function(xhr, status, errorThrown) {
            console.log('fail');
        });

