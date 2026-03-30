const locale = document.documentElement.getAttribute("lang") || "en";
const cmsg = (window["cmsg"] = window["cmsg"] || {})
cmsg["locale"] = locale;
switch (locale) {
	case "ar-EG":
		import('../../../../../strings/main.strings.ar-EG.js');
		break;
	case "de-DE":
		import('../../../../../strings/main.strings.de-DE.js');
		break;
	case "en":
		import('../../../../../strings/main.strings.en.js');
		break;
	case "en-psaccent":
		import('../../../../../strings/main.strings.en-psaccent.js');
		break;
	case "es-419":
		import('../../../../../strings/main.strings.es-419.js');
		break;
	case "es-ES":
		import('../../../../../strings/main.strings.es-ES.js');
		break;
	case "fr-FR":
		import('../../../../../strings/main.strings.fr-FR.js');
		break;
	case "id-ID":
		import('../../../../../strings/main.strings.id-ID.js');
		break;
	case "it-IT":
		import('../../../../../strings/main.strings.it-IT.js');
		break;
	case "ja-JP":
		import('../../../../../strings/main.strings.ja-JP.js');
		break;
	case "ko-KR":
		import('../../../../../strings/main.strings.ko-KR.js');
		break;
	case "ms-MY":
		import('../../../../../strings/main.strings.ms-MY.js');
		break;
	case "nl-NL":
		import('../../../../../strings/main.strings.nl-NL.js');
		break;
	case "pl-PL":
		import('../../../../../strings/main.strings.pl-PL.js');
		break;
	case "pt-BR":
		import('../../../../../strings/main.strings.pt-BR.js');
		break;
	case "ro-RO":
		import('../../../../../strings/main.strings.ro-RO.js');
		break;
	case "sv-SE":
		import('../../../../../strings/main.strings.sv-SE.js');
		break;
	case "th-TH":
		import('../../../../../strings/main.strings.th-TH.js');
		break;
	case "tr-TR":
		import('../../../../../strings/main.strings.tr-TR.js');
		break;
	case "vi-VN":
		import('../../../../../strings/main.strings.vi-VN.js');
		break;
	case "en-XA":
		import('../../../../../strings/main.strings.en-XA.js');
		break;
	case "en-XB":
		import('../../../../../strings/main.strings.en-XB.js');
		break;
	default:
		import('../../../../../strings/main.strings.en.js');
		break;
}