sap.ui.define([
	"sap/ui/core/format/DateFormat",
	"dso/zuitabsanciones/utils/Constants",
	"sap/ui/core/format/NumberFormat"
], function (D, Constants, NumberFormat) {
	"use strict";
	return {

		formatStateLiqui: function (value) {
			switch (value) {
				case '00'://No Validado
					return 'Warning';
				case '01'://No Validado
					return 'Warning';
				case '02'://Validado
					return 'Information';
				case '03'://Informado RRHH
					return 'Success';

			}
		},

		formatIconState: function (value) {
			switch (value) {
				case '00'://No Validado
					return 'sap-icon://pending';
				case '01'://No Validado
					return 'sap-icon://pending';
				case '02'://Validado
					return 'sap-icon://accept';
				case '03'://Informado RRHH
					return 'sap-icon://sys-enter-2';

			}
		},

		formatPercentage: (number) => {
			if(number === null)
				return number
			return NumberFormat.getPercentInstance().format(number);
		},

		getStatePorceLista: function (PORC_OBJ_LISTA, PORC_LISTA) {
			let vPorcObjList = parseFloat(PORC_OBJ_LISTA);
			let vPorcjList = parseFloat(PORC_LISTA);
			if(vPorcjList >= vPorcObjList)return 'Success';
			return 'Warning';
		},

		getStatePorceCumple: function (MONTO_PRESUP, MONTO_REAL) {
			let vMontoPresu = parseFloat(MONTO_PRESUP);
			let vMontoReal = parseFloat(MONTO_REAL);
			if(vMontoReal >= vMontoPresu)return 'Success';
			return 'Warning';
		},

		getStateObjQT: function (OBJ_CANT_CARGAS, CARGAS_REALES) {
			let vMontoPresu = parseFloat(OBJ_CANT_CARGAS);
			let vMontoReal = parseFloat(CARGAS_REALES);
			if(vMontoReal >= vMontoPresu)return 'Success';
			return 'Warning';
		},

		AsignaSignoPorcentaje: function(pValor){
			let Valor = pValor + '%';
			return Valor;
		}
	};
});