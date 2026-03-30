const locale = document.documentElement.getAttribute("lang") || "en";
const cmsg = (window["cmsg"] = window["cmsg"] || {})
cmsg["locale"] = locale;
switch (locale) {
	case "ar-EG":
		require("../../../../../strings/main.strings.ar-EG.js");
		break;
	case "de-DE":
		require("../../../../../strings/main.strings.de-DE.js");
		break;
	case "en":
		require("../../../../../strings/main.strings.en.js");
		break;
	case "en-psaccent":
		require("../../../../../strings/main.strings.en-psaccent.js");
		break;
	case "es-419":
		require("../../../../../strings/main.strings.es-419.js");
		break;
	case "es-ES":
		require("../../../../../strings/main.strings.es-ES.js");
		break;
	case "fr-FR":
		require("../../../../../strings/main.strings.fr-FR.js");
		break;
	case "id-ID":
		require("../../../../../strings/main.strings.id-ID.js");
		break;
	case "it-IT":
		require("../../../../../strings/main.strings.it-IT.js");
		break;
	case "ja-JP":
		require("../../../../../strings/main.strings.ja-JP.js");
		break;
	case "ko-KR":
		require("../../../../../strings/main.strings.ko-KR.js");
		break;
	case "ms-MY":
		require("../../../../../strings/main.strings.ms-MY.js");
		break;
	case "nl-NL":
		require("../../../../../strings/main.strings.nl-NL.js");
		break;
	case "pl-PL":
		require("../../../../../strings/main.strings.pl-PL.js");
		break;
	case "pt-BR":
		require("../../../../../strings/main.strings.pt-BR.js");
		break;
	case "ro-RO":
		require("../../../../../strings/main.strings.ro-RO.js");
		break;
	case "sv-SE":
		require("../../../../../strings/main.strings.sv-SE.js");
		break;
	case "th-TH":
		require("../../../../../strings/main.strings.th-TH.js");
		break;
	case "tr-TR":
		require("../../../../../strings/main.strings.tr-TR.js");
		break;
	case "vi-VN":
		require("../../../../../strings/main.strings.vi-VN.js");
		break;
	case "en-XA":
		require("../../../../../strings/main.strings.en-XA.js");
		break;
	case "en-XB":
		require("../../../../../strings/main.strings.en-XB.js");
		break;
	default:
		require("../../../../../strings/main.strings.en.js");
		break;
}