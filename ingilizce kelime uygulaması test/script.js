
let ingilizce = ["accountant","afraid","age","airplane","alone","angry","animal","answer","architcet","arrive","aunt","bag","ball","bath","beautiful","bill","body","boil","bookstore","boring","borrow","boss","bottle","box","brave","bread","break","bridge","brush","build","butter","calculator","calendar","call","capital","carpenter","carpet","carry","cartoon","chair","cheap","cheese","cherry","chicken","church","clean","clear","clever","clock","cloud","coat","cold","company","continue","correct","country","cow","cry","daily","dark","dentist","difficult","dirty","divorced","draw","early","earn","elephant","emergency","empty","engaged","engineer","enough","eraser","error","fall","far","farm","fat","finger","fire","flight","floor","fork","friendly","fruit","funny","garden","glass","grape","gun","habit","half","hand","handsome","hate","health","hear","heart","heavy","high","history","horror","hungry","ill","interested","job","journalist","kill","large","laugh","lawyer","leave","left","lend","letter","library","light","lunch","main","manager","map","married","meal","meet","meeting","melon","minute","mirror","miss","mistake","month","need","neighbour","news","nice","nose","nurse","object","opposite","oven","page","paint","parent","pass","pay","pepper","personal","pet","place","plane","pocket","polite","pool","poor","possible","push","quick","quiet","railway","ready","refrigerator","remember","rent","repair","repeat","restroom","return","rice","rich","ride","right","ring","rise","river","road","roof","room","rose","salt","same","security","sell","serious","shelf","ship","shirt","shoe","show","sick","sing","single","skirt","sky","smile","snow","socks","son","song","soup","spend","spoon","stamp","stay","story","strawberry","strong","successful","suit","sweet","talk","tall","teach","thick","thief","thin","think","thirsty","ticket","tidy","tired","tootbrush","tootpaste","towel","tower","town","toy","trainers","travel","tree","trousers","turn","ugly","umbrella","uncle","understand","underwear","waiter","wall","watermelon","way","weak","wear","week","wind","winter","wonderful","word","wrong","zoo"];


let turkce = ["muhasebeci","korkmuş","yaş","uçak","yalnız","sinirli","hayvan","cevap vermek","mimar","varmak","hala-teyze","çanta","top","banyo","güzel","hesap-fatura","vücut","kaynamak","kitapçı","sıkıcı","ödünç almak","patron","şişe","kutu","cesur","ekmek","kırmak","köprü","fırça","inşa etmek","tereyağı","hesap makinesi","takvim","aramak","başkent","marangoz","halı","taşımak","çizgi film","sandalye","ucuz","peynir","kiraz","tavuk","kilise","temizlemek","açık-net","akıllı","saat","bulut","kaban","soğuk","şirket","devam etmek","doğru","ülke","inek","ağlamak","günlük","koyu-karanlık","diş hekimi","zor","kirli","boşanmış","çizmek","erken","kazanmak","fil","acil","boş","nişanlı","mühendis","yeterli","silgi","hata","düşmek-sonbahar","uzak","çiftlik","şişman","parmak","ateş-yangın","uçuş","yer-zemin","çatal","arkadaşça","meyve","komik","bahçe","bardak","üzüm","tabanca","alışkanlık","yarım","el","yakışıklı","nefret etmek","sağlık","duymak","kalp","ağır","yüksek","tarih","korku","aç","hasta","ilgili","meslek","gazeteci","öldürmek","geniş","gülmek","avukat","ayrılmak","sol","ödünç vermek","maktup","kütüphane","hafif-ışık","öğle yemeği","ana-temel","yönetici-müdür","harita","evli","yemek","buluşmak","toplantı","kavun","dakika","ayna","özlemek","hata","ay","ihtiyaç","komşu","haberler","hoş","burun","hemşire","nesne","karşı-zıt","fırın","sayfa","boyamak","ebeveyn","geçmek","ödemek","biber","kişisel","evcil hayvan","yer","uçak","cep","kibar","havuz","fakir","mümkün","ittirmek","hızlı","sessiz","tren yolu","hazır","buzdolabı","hatırlamak","kiralamak","tamir etmek","tekrar etmek","tuvalet","geri dönmek","pirinç","zengin","binmek","sağ","yüzük-telefonun çalması","doğmak","ırmak","yol","çatı","oda","gül","tuz","aynı","güvenlik","satmak","ciddi","raf","gemi","gömlek","ayakkabı","göstermek","hasta","şarkı söylemek","bekar","etek","gökyüzü","gülümsemek","kar","çorap","erkek evlat","şarkı","çorba","harcamak","kaşık","pul","kalmak","hikaye","çilek","güçlü","başarılı","takım elbise","tatlı","konuşmak","uzun","öğretmek","kalın","hırsız","zayıf","düşünmek","susamış","bilet","düzenlemek","yorgun","diş fırçası","diş macunu","havlu","kule","kasaba","oyuncak","spor ayakkabı","seyahat","ağaç","pantolon","dönmek","çirkin","şemsiye","amca-dayı","anlamak","iç çamaşırı","garson","duvar","karpuz","yol","güçsüz","giyinmek","hafta","rüzgar","kış","harika","kelime","yalnış","hayvanat bahçesi"];

var number= Math.round(Math.random() * ingilizce.length);
document.getElementById("tus").value = "KONTROL ET";
document.getElementById("output").innerHTML = ingilizce[number];


function kontrol(){
    var girdi = document.getElementById("girdi").value;
    if(girdi == turkce[number]){
        document.getElementById("result").style.color = "rgb(0, 80, 0)";
        document.getElementById("result").innerHTML = "DOĞRU :D";
        document.getElementById("resim").src = "photos/correct.png"
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
    else{
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "YALNIŞ! girdiğiniz kelimenin doğrusu: " + turkce[number];
        document.getElementById("resim").src = "photos/false.webp"
        setTimeout(() => {
            window.location.reload();
        }, 2500);
    }
    
}







