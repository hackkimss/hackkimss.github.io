var params = {
            odrSbagNos: _SBAG_NOS.split(','), // �λ컮援щ땲踰덊샇��
            useCupIssuNos: useCupIssuNos, // �ъ슜荑좏룿紐⑸줉
            sbagPrens: sbagPrens, // �쇳븨諛깆궗���덉젙蹂�
            goosPrens: goosPrens, // �곹뭹�ъ��덉젙蹂�
            fulnm: $('#fulnm').val(), // 二쇰Ц�먮챸
            moblNo: $('#moblNo').val(), // 紐⑤컮�쇰쾲��
            eml: $('#eml').val(), // �대찓��
            dlvtoNo: (_DLVTO_NO) ? _DLVTO_NO : '', // 諛곗넚吏�踰덊샇
            rcvrFulnm: $('#rcvrFulnm').val(), // �섏떊�먮챸
            zipNo: $('#zipNo').val(), // �고렪踰덊샇
            zipAddr: $('#zipAddr').val(), // �고렪二쇱냼
            dtlAddr: $('#dtlAddr').val(), // �곸꽭二쇱냼
            rcvrMoblNo: $('#rcvrMoblNo').val(), // �섎졊�먰빖�쒗룿
            dlvrMemo: dlvrMemo, // 諛곗넚硫붾え
            nextSettWayCdYn: '', // �ㅼ쓬寃곗젣�섎떒�щ�
            settWayCd: $('.select-payment').find('input:radio:checked').val(), // 寃곗젣�섎떒肄붾뱶
            stfSaleYn: $('#stfSaleYn').val(), // �꾩쭅�먰븷�몄뿬遺�
            ssgPoinAmt: (typeof(_SSG_POIN_AMT) === 'undefined') ? 0 : _SSG_POIN_AMT, // �ъ슜�좎꽭怨꾪룷�명듃
            ssgPoinPwd: ssgPoinPwd, // �좎꽭怨꾪룷�명듃鍮꾨�踰덊샇
            poinAmt: (typeof(_CHICOR_POIN_AMT) === 'undefined') ? 0 : _CHICOR_POIN_AMT, // �ъ슜�쒖퐫瑜댄룷�명듃
            odrTotamt: Number($("#odrTotamt").val()), // 寃곗젣湲덉븸
            rlxNoUseYn: ($('#rlxNoUseYn').prop('checked') ? 'Y' : 'N') // �덉떖踰덊샇�ъ슜�щ�
        }

        loadingToggle();

        $.ajax({
            url: '/order/ready',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(params)
        })
        .done(function(data, status, request) {
            // 紐⑤뱺 二쇰Ц湲덉븸�� �ъ씤�몃줈留� 寃곗젣�� 寃쎌슦
			if ( $("#orgnOdrTotamt").val() == ( params.ssgPoinAmt + params.poinAmt ) ) {
				$.ajax({
					url: '/order/poinpay',
			        method: 'POST',
					contentType: 'application/json',
					data: JSON.stringify({})
			    })
			    .done(function(data, status, request) {
			        if (data == undefined || data == null || data == "") {
			        	alert("二쇰Ц�ㅽ뙣");
			        } else {
			        	location.href = '/order/success?odrNo=' + data;
			        }
			    })
			    .fail(function(xhr, status, errorThrown) {
			        alert('二쇰Ц 寃곗젣瑜� �ㅽ뙣�섏��듬땲��.\n�좎떆 �� �ㅼ떆 �쒕룄�� 二쇱꽭��.')
			        console.log(xhr);
			    });
			} else {
			    var odrForm = document.odrForm;

                var paymethod = inicisPayment(odrForm);

	            odrForm.P_NOTI.value = data;
	            odrForm.P_AMT.value = Number($('#odrTotamt').val());
	            odrForm.P_GOODS.value = $('.goods-item').eq(0).find('.info').find('a').text();
	            odrForm.P_UNAME.value = $('#fulnm').val().trim();
	            odrForm.P_MOBILE.vale = $('#moblNo').val().trim();
	            odrForm.P_EMAIL.value = $('#eml').val().trim();

	            odrForm.submit();
			}
        })
        .fail(function(xhr, status, errorThrown) {
            loadingToggle();
            ajaxFail(xhr, status, errorThrown);
        });
    });
