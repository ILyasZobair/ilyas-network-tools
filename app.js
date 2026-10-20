const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const translations = {
  en: {
    browserOnly:"Runs in your browser", eyebrow:"NETWORKING TOOLKIT · FREE & OPEN",
    heroA:"Understand your network.",heroB:"Solve it with confidence.",
    heroCopy:"Practical tools for students, IT beginners, and network enthusiasts. No account. No backend. Just useful tools.",
    navSubnet:"Subnet Calculator",navTrouble:"Troubleshooting",navQuiz:"Networking Quiz",
    tool01:"TOOL 01",tool02:"TOOL 02",tool03:"TOOL 03",
    subnetTitle:"IPv4 Subnet Calculator",subnetDesc:"Enter an IPv4 address and prefix to calculate its subnet details.",
    ipLabel:"IPv4 address",ipHint:"Example: 192.168.1.25",prefixLabel:"CIDR prefix",prefixHint:"Choose a prefix from /0 to /32",calculateBtn:"Calculate subnet",
    subnetNote:"Usable host counts use conventional IPv4 subnet rules. /31 and /32 have special point-to-point/host use cases.",
    resultTitle:"Subnet results",copyResults:"Copy results",copied:"Copied to clipboard",
    invalidIp:"Enter a valid IPv4 address, for example 192.168.1.25.",
    invalidOctet:"Each IPv4 octet must be between 0 and 255.",
    address:"IP address",prefix:"CIDR prefix",mask:"Subnet mask",wildcard:"Wildcard mask",network:"Network address",broadcast:"Broadcast address",firstHost:"First usable host",lastHost:"Last usable host",totalAddresses:"Total addresses",usableHosts:"Usable host addresses",ipClass:"Address category",
    privateIp:"Private IPv4",publicIp:"Public / other IPv4",specialIp:"Special-use IPv4",
    troubleTitle:"Network Troubleshooting",troubleDesc:"Pick a symptom to see a safe, practical diagnostic path.",guided:"GUIDED",
    symInternet:"No internet access",symInternetSub:"Can't reach websites",symDns:"DNS problem",symDnsSub:"IP works, names fail",symWifi:"Wi-Fi connection",symWifiSub:"Can't join the network",symSlow:"Slow connection",symSlowSub:"High latency or low speed",
    safeNote:"Commands shown here are diagnostic. Results vary by network and firewall policy. Only troubleshoot systems you are authorized to use.",
    stepsLabel:"Recommended checks",whyLabel:"Why this helps",windows:"Windows",linux:"Linux",copy:"Copy",copiedCommand:"Command copied",
    quizTitle:"Networking Quiz",quizDesc:"Test your fundamentals. Learn from every answer.",quizLevel:"BEGINNER",nextQuestion:"Next question",tryAgain:"Try again",
    question:"QUESTION",of:"of",score:"Score",correct:"Correct!",incorrect:"Not quite.",quizComplete:"Quiz complete",quizCompleteCopy:"You finished the networking fundamentals quiz.",restartQuiz:"Restart quiz",
    calloutTitle:"Built for learning by doing.",calloutCopy:"A growing open-source project. Explore the code, suggest improvements, and build your networking skills.",viewGithub:"View GitHub",footerText:"Made for curious minds · Free to use",
    troubleData:{
      internet:{title:"Diagnose no internet access",intro:"Work from the local connection outward. Do not change network settings until you understand the current configuration.",steps:[
        {title:"Check interface and IP settings",why:"Look for a valid IPv4 address, subnet mask, and gateway. An address beginning with 169.254 often indicates DHCP did not provide a lease.",win:"ipconfig /all",linux:"ip addr"},
        {title:"Check the default route",why:"A default route is usually needed to reach destinations outside the local subnet.",win:"route print",linux:"ip route"},
        {title:"Test the local gateway",why:"Use the gateway address shown by your device. A failed ping can also mean ICMP is blocked.",win:"ping <gateway-IP>",linux:"ping -c 4 <gateway-IP>"},
        {title:"Test external IP and DNS separately",why:"If an external IP responds but domain names do not, investigate DNS. Network policies may block ping.",win:"ping 1.1.1.1\nnslookup example.com",linux:"ping -c 4 1.1.1.1\nnslookup example.com"}
      ]},
      dns:{title:"Diagnose DNS resolution",intro:"DNS translates names such as example.com into IP addresses. Separate name resolution from general connectivity.",steps:[
        {title:"Check configured DNS servers",why:"Confirm which DNS servers your adapter or resolver is using.",win:"ipconfig /all",linux:"cat /etc/resolv.conf"},
        {title:"Query a domain",why:"This tests whether a DNS server can answer the lookup.",win:"nslookup example.com",linux:"nslookup example.com"},
        {title:"Compare IP and name connectivity",why:"If IP connectivity works but lookups fail, DNS is a likely area to investigate.",win:"ping 1.1.1.1\nnslookup example.com",linux:"ping -c 4 1.1.1.1\nnslookup example.com"},
        {title:"Review local DNS cache (optional)",why:"A stale local cache can occasionally cause name-resolution issues.",win:"ipconfig /displaydns",linux:"Check your distribution's resolver service and logs"}
      ]},
      wifi:{title:"Diagnose Wi-Fi connection issues",intro:"Start with signal and association before changing IP settings or router configuration.",steps:[
        {title:"Confirm Wi-Fi is enabled",why:"Check Airplane mode, the wireless adapter, and whether the correct SSID is selected.",win:"netsh wlan show interfaces",linux:"nmcli device status"},
        {title:"Inspect the connection state",why:"Confirm the adapter is connected and has received network configuration.",win:"ipconfig",linux:"ip addr"},
        {title:"Review available networks",why:"Signal strength, security settings, and the selected access point can affect connection.",win:"netsh wlan show networks",linux:"nmcli device wifi list"},
        {title:"Reconnect safely",why:"If permitted, disconnect and reconnect to the correct network. Avoid sharing Wi-Fi passwords or sensitive output.",win:"Use Windows Wi-Fi settings",linux:"Use your desktop network settings or NetworkManager"}
      ]},
      slow:{title:"Diagnose a slow connection",intro:"Compare wired/wireless conditions, latency, and name resolution before concluding where the issue lies.",steps:[
        {title:"Compare more than one destination",why:"A single host may be slow or rate-limit probes. Compare several known destinations.",win:"ping -n 4 1.1.1.1",linux:"ping -c 4 1.1.1.1"},
        {title:"Inspect the route",why:"This can reveal where a route changes or stops responding, though intermediate hops may block probes.",win:"tracert example.com",linux:"tracepath example.com"},
        {title:"Check local link and signal",why:"Weak Wi-Fi signal, interference, or a busy local network can reduce performance.",win:"netsh wlan show interfaces",linux:"nmcli device wifi list"},
        {title:"Compare DNS and IP response",why:"Slow DNS lookup can make sites feel slow even when the network path is otherwise healthy.",win:"nslookup example.com",linux:"nslookup example.com"}
      ]}
    }
  },
  ar: {
    browserOnly:"يعمل داخل المتصفح",eyebrow:"أدوات الشبكات · مجانية ومفتوحة",
    heroA:"افهم شبكتك.",heroB:"واحلل مشكلاتها بثقة.",
    heroCopy:"أدوات عملية للطلاب والمبتدئين ومحبي الشبكات. بلا حساب، بلا خادم، فقط أدوات مفيدة.",
    navSubnet:"حاسبة الشبكات",navTrouble:"استكشاف الأخطاء",navQuiz:"اختبار الشبكات",
    tool01:"الأداة 01",tool02:"الأداة 02",tool03:"الأداة 03",
    subnetTitle:"حاسبة شبكات IPv4",subnetDesc:"أدخل عنوان IPv4 والبادئة لحساب تفاصيل الشبكة الفرعية.",
    ipLabel:"عنوان IPv4",ipHint:"مثال: 192.168.1.25",prefixLabel:"بادئة CIDR",prefixHint:"اختر بادئة من /0 إلى /32",calculateBtn:"احسب الشبكة",
    subnetNote:"حساب الأجهزة القابلة للاستخدام يتبع قواعد IPv4 التقليدية. للبادئتين /31 و/32 استخدامات خاصة.",
    resultTitle:"نتائج الشبكة",copyResults:"نسخ النتائج",copied:"تم النسخ إلى الحافظة",
    invalidIp:"أدخل عنوان IPv4 صحيحًا، مثل 192.168.1.25.",invalidOctet:"يجب أن تكون كل خانة في عنوان IPv4 بين 0 و255.",
    address:"عنوان IP",prefix:"بادئة CIDR",mask:"قناع الشبكة",wildcard:"قناع Wildcard",network:"عنوان الشبكة",broadcast:"عنوان البث",firstHost:"أول عنوان جهاز",lastHost:"آخر عنوان جهاز",totalAddresses:"إجمالي العناوين",usableHosts:"عناوين الأجهزة المتاحة",ipClass:"فئة العنوان",
    privateIp:"IPv4 خاص",publicIp:"IPv4 عام / آخر",specialIp:"IPv4 للاستخدام الخاص",
    troubleTitle:"استكشاف أخطاء الشبكة",troubleDesc:"اختر المشكلة لعرض خطوات تشخيص عملية وآمنة.",guided:"دليل تفاعلي",
    symInternet:"لا يوجد إنترنت",symInternetSub:"تعذّر فتح المواقع",symDns:"مشكلة DNS",symDnsSub:"الاتصال بالـ IP يعمل والأسماء لا تعمل",symWifi:"اتصال Wi-Fi",symWifiSub:"تعذّر الاتصال بالشبكة",symSlow:"اتصال بطيء",symSlowSub:"تأخير مرتفع أو سرعة منخفضة",
    safeNote:"الأوامر هنا للتشخيص فقط. تختلف النتائج حسب الشبكة والجدار الناري. افحص الأنظمة التي تملك صلاحية استخدامها فقط.",
    stepsLabel:"الفحوصات المقترحة",whyLabel:"لماذا يفيد هذا الفحص",windows:"Windows",linux:"Linux",copy:"نسخ",copiedCommand:"تم نسخ الأمر",
    quizTitle:"اختبار الشبكات",quizDesc:"اختبر أساسياتك وتعلّم من كل إجابة.",quizLevel:"مبتدئ",nextQuestion:"السؤال التالي",tryAgain:"حاول مجددًا",
    question:"السؤال",of:"من",score:"النتيجة",correct:"إجابة صحيحة!",incorrect:"ليست الإجابة الصحيحة.",quizComplete:"اكتمل الاختبار",quizCompleteCopy:"لقد أنهيت اختبار أساسيات الشبكات.",restartQuiz:"إعادة الاختبار",
    calloutTitle:"تعلّم من خلال التطبيق.",calloutCopy:"مشروع مفتوح المصدر يتطور باستمرار. استكشف الكود واقترح تحسينات وطوّر مهاراتك.",viewGithub:"عرض GitHub",footerText:"صُنع للعقول الفضولية · مجاني للاستخدام",
    troubleData:{
      internet:{title:"تشخيص انقطاع الإنترنت",intro:"ابدأ من الاتصال المحلي ثم انتقل للخارج. لا تغيّر إعدادات الشبكة قبل فهم الإعدادات الحالية.",steps:[
        {title:"افحص واجهة الشبكة وإعدادات IP",why:"تحقق من عنوان IPv4 والقناع والبوابة. العنوان الذي يبدأ بـ 169.254 غالبًا يشير إلى عدم الحصول على عنوان من DHCP.",win:"ipconfig /all",linux:"ip addr"},
        {title:"افحص المسار الافتراضي",why:"تحتاج عادةً إلى مسار افتراضي للوصول إلى الوجهات خارج الشبكة المحلية.",win:"route print",linux:"ip route"},
        {title:"اختبر البوابة المحلية",why:"استخدم عنوان البوابة الظاهر في جهازك. فشل ping قد يعني أيضًا أن ICMP محظور.",win:"ping <gateway-IP>",linux:"ping -c 4 <gateway-IP>"},
        {title:"اختبر IP خارجيًا وDNS كلًا على حدة",why:"إذا استجاب عنوان IP ولم تعمل أسماء النطاقات، فافحص DNS. قد تمنع سياسات الشبكة ping.",win:"ping 1.1.1.1\nnslookup example.com",linux:"ping -c 4 1.1.1.1\nnslookup example.com"}
      ]},
      dns:{title:"تشخيص مشكلات DNS",intro:"يحوّل DNS أسماء مثل example.com إلى عناوين IP. افصل اختبار حل الأسماء عن الاتصال العام.",steps:[
        {title:"اعرف خوادم DNS المضبوطة",why:"تحقق من خوادم DNS التي يستخدمها محول الشبكة أو محلّل الأسماء.",win:"ipconfig /all",linux:"cat /etc/resolv.conf"},
        {title:"استعلم عن اسم نطاق",why:"يختبر هذا قدرة خادم DNS على الإجابة عن الاستعلام.",win:"nslookup example.com",linux:"nslookup example.com"},
        {title:"قارن الاتصال بالـ IP وبالاسم",why:"إذا كان الاتصال بالـ IP يعمل وفشل حل الأسماء، فقد تكون المشكلة في DNS.",win:"ping 1.1.1.1\nnslookup example.com",linux:"ping -c 4 1.1.1.1\nnslookup example.com"},
        {title:"افحص ذاكرة DNS المحلية (اختياري)",why:"قد تتسبب بيانات مخزنة قديمة أحيانًا في مشكلات حل الأسماء.",win:"ipconfig /displaydns",linux:"افحص خدمة محلّل الأسماء والسجلات في توزيعتك"}
      ]},
      wifi:{title:"تشخيص مشكلات Wi-Fi",intro:"ابدأ بالإشارة والاتصال اللاسلكي قبل تغيير إعدادات IP أو الموجّه.",steps:[
        {title:"تأكد من تشغيل Wi-Fi",why:"افحص وضع الطيران والمحوّل اللاسلكي وتأكد من اختيار اسم الشبكة الصحيح.",win:"netsh wlan show interfaces",linux:"nmcli device status"},
        {title:"افحص حالة الاتصال",why:"تحقق من اتصال المحوّل وحصوله على إعدادات الشبكة.",win:"ipconfig",linux:"ip addr"},
        {title:"اعرض الشبكات المتاحة",why:"قد تؤثر قوة الإشارة وإعدادات الأمان ونقطة الوصول على الاتصال.",win:"netsh wlan show networks",linux:"nmcli device wifi list"},
        {title:"أعد الاتصال بأمان",why:"إذا كان مسموحًا، افصل الاتصال وأعد الاتصال بالشبكة الصحيحة. لا تشارك كلمات مرور Wi-Fi أو معلومات حساسة.",win:"استخدم إعدادات Wi-Fi في Windows",linux:"استخدم إعدادات الشبكة أو NetworkManager"}
      ]},
      slow:{title:"تشخيص بطء الاتصال",intro:"قارن بين الاتصال السلكي واللاسلكي وزمن الاستجابة وحل الأسماء قبل تحديد السبب.",steps:[
        {title:"قارن أكثر من وجهة",why:"قد تكون وجهة واحدة بطيئة أو تحد من الاختبارات. قارن عدة وجهات معروفة.",win:"ping -n 4 1.1.1.1",linux:"ping -c 4 1.1.1.1"},
        {title:"افحص المسار",why:"قد يوضح المسار مكان تغيّر الطريق أو توقف الرد، لكن بعض الأجهزة الوسيطة تمنع الاختبارات.",win:"tracert example.com",linux:"tracepath example.com"},
        {title:"افحص الاتصال المحلي والإشارة",why:"ضعف إشارة Wi-Fi أو التداخل أو ازدحام الشبكة المحلية قد يقلل الأداء.",win:"netsh wlan show interfaces",linux:"nmcli device wifi list"},
        {title:"قارن DNS باستجابة IP",why:"قد يجعل DNS البطيء فتح المواقع يبدو بطيئًا حتى لو كان مسار الشبكة سليمًا.",win:"nslookup example.com",linux:"nslookup example.com"}
      ]}
    }
  }
};

let language = "en";
let currentSymptom = "internet";
const t = (key) => translations[language][key] ?? key;

function setLanguage(next) {
  language = next;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  $("#langToggle").textContent = language === "en" ? "العربية" : "English";
  $$("[data-i18n]").forEach(el => {
    const value = t(el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });
  renderSubnet();
  renderTroubleshooting();
  renderQuiz();
}
$("#langToggle").addEventListener("click", () => setLanguage(language === "en" ? "ar" : "en"));

$$(".nav-item").forEach(button => button.addEventListener("click", () => {
  $$(".nav-item").forEach(item => item.classList.toggle("active", item === button));
  $$(".tool-panel").forEach(panel => panel.classList.toggle("active", panel.id === `panel-${button.dataset.tab}`));
}));

const prefixInput = $("#prefixInput");
for (let prefix = 0; prefix <= 32; prefix++) {
  const option = document.createElement("option");
  option.value = prefix;
  option.textContent = `/${prefix}`;
  if (prefix === 24) option.selected = true;
  prefixInput.appendChild(option);
}

function parseIPv4(value) {
  const parts = value.trim().split(".");
  if (parts.length !== 4 || parts.some(part => !/^\d{1,3}$/.test(part))) return null;
  const octets = parts.map(Number);
  if (octets.some(n => n < 0 || n > 255)) return null;
  return octets.reduce((acc, octet) => ((acc * 256) + octet) >>> 0, 0) >>> 0;
}
function intToIPv4(value) {
  const n = value >>> 0;
  return [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
}
function ipv4Mask(prefix) {
  if (prefix === 0) return 0;
  return (0xFFFFFFFF << (32 - prefix)) >>> 0;
}
function isPrivateIP(ip) {
  const a = ip >>> 24, b = (ip >>> 16) & 255;
  return a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168);
}
function addressCategory(ip) {
  const a = ip >>> 24, b = (ip >>> 16) & 255;
  if (a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168)) return t("privateIp");
  if (a === 127 || a === 0 || (a === 169 && b === 254) || a >= 224) return t("specialIp");
  return t("publicIp");
}
function calculateSubnet(ipText, prefix) {
  const ip = parseIPv4(ipText);
  if (ip === null) return { error: t("invalidIp") };
  const parts = ipText.trim().split(".");
  if (parts.some(part => Number(part) > 255)) return { error: t("invalidOctet") };
  const mask = ipv4Mask(prefix);
  const wildcard = (~mask) >>> 0;
  const network = (ip & mask) >>> 0;
  const broadcast = (network | wildcard) >>> 0;
  let firstHost = network, lastHost = broadcast, usable = 0;
  if (prefix <= 30) { firstHost = network + 1; lastHost = broadcast - 1; usable = Math.max(0, 2 ** (32 - prefix) - 2); }
  else if (prefix === 31) { firstHost = network; lastHost = broadcast; usable = 2; }
  else { firstHost = ip; lastHost = ip; usable = 1; }
  return {
    ip: ipText.trim(), prefix: `/${prefix}`, mask: intToIPv4(mask), wildcard: intToIPv4(wildcard),
    network: intToIPv4(network), broadcast: intToIPv4(broadcast),
    firstHost: intToIPv4(firstHost), lastHost: intToIPv4(lastHost),
    total: (2 ** (32 - prefix)).toLocaleString("en-US"),
    usable: usable.toLocaleString("en-US"), category: addressCategory(ip)
  };
}
const resultKeys = [
  ["address","ip"],["prefix","prefix"],["mask","mask"],["wildcard","wildcard"],
  ["network","network"],["broadcast","broadcast"],["firstHost","firstHost"],
  ["lastHost","lastHost"],["totalAddresses","total"],["usableHosts","usable"],["ipClass","category"]
];
let lastSubnet = null;
function renderSubnet() {
  if (!lastSubnet) return;
  const results = $("#subnetResults"), error = $("#subnetError");
  if (lastSubnet.error) {
    error.textContent = lastSubnet.error; error.hidden = false; results.innerHTML = ""; return;
  }
  error.hidden = true;
  results.innerHTML = `<div class="results-head"><h3>${t("resultTitle")}</h3><button class="copy-btn" id="copyResults" type="button">${t("copyResults")}</button></div><div class="result-grid">${
    resultKeys.map(([label,key],i) => `<div class="result-card"><div class="label">${t(label)}</div><div class="value ${i===4?'accent':''}">${escapeHTML(lastSubnet[key])}</div></div>`).join("")
  }</div>`;
  $("#copyResults").addEventListener("click", async () => {
    const text = resultKeys.map(([label,key]) => `${t(label)}: ${lastSubnet[key]}`).join("\n");
    await copyText(text, t("copied"));
  });
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
$("#subnetForm").addEventListener("submit", event => {
  event.preventDefault();
  lastSubnet = calculateSubnet($("#ipInput").value, Number(prefixInput.value));
  renderSubnet();
});
function initSubnet() {
  lastSubnet = calculateSubnet($("#ipInput").value, Number(prefixInput.value));
  renderSubnet();
}

function renderTroubleshooting() {
  const data = t("troubleData")[currentSymptom];
  $("#troubleDetails").innerHTML = `<h3>${data.title}</h3><p>${data.intro}</p><div class="kicker" style="margin-bottom:12px">${t("stepsLabel")}</div><div class="steps">${
    data.steps.map((step,index) => `<article class="step"><span class="step-num">${String(index+1).padStart(2,"0")}</span><div><h4>${step.title}</h4><p>${step.why}</p><div class="commands"><div class="command-row"><code>${escapeHTML(step.win)}</code><button type="button" data-copy="${escapeHTML(step.win)}">${t("copy")} · ${t("windows")}</button></div><div class="command-row"><code>${escapeHTML(step.linux)}</code><button type="button" data-copy="${escapeHTML(step.linux)}">${t("copy")} · ${t("linux")}</button></div></div></div></article>`).join("")
  }</div>`;
  $$("[data-copy]", $("#troubleDetails")).forEach(button => button.addEventListener("click", () => copyText(button.dataset.copy, t("copiedCommand"))));
}
$$(".symptom-card").forEach(button => button.addEventListener("click", () => {
  currentSymptom = button.dataset.symptom;
  $$(".symptom-card").forEach(card => card.classList.toggle("selected", card === button));
  renderTroubleshooting();
}));

async function copyText(text, successMessage) {
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else {
      const area = document.createElement("textarea");
      area.value = text; area.style.position = "fixed"; area.style.opacity = "0";
      document.body.appendChild(area); area.select();
      const ok = document.execCommand("copy"); area.remove();
      if (!ok) throw new Error("Copy failed");
    }
    showToast(successMessage);
  } catch {
    showToast(text);
  }
}
let toastTimer;
function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

const questions = [
  {q:"What does DNS primarily do?",opts:["Assigns IP addresses automatically","Translates domain names to IP addresses","Encrypts Wi-Fi traffic","Measures network speed"],correct:1,why:"DNS resolves human-readable names, such as example.com, to IP addresses."},
  {q:"Which command shows IPv4 configuration on Windows?",opts:["ip addr","ifconfig","ipconfig","route -n"],correct:2,why:"ipconfig displays Windows IP configuration. Use ipconfig /all for more details."},
  {q:"What is the usual purpose of a default gateway?",opts:["Store passwords","Connect a local network to other networks","Assign MAC addresses","Replace the subnet mask"],correct:1,why:"A default gateway is the next hop used when a destination is not reached through a more specific route."},
  {q:"What is the subnet mask for a /24 IPv4 prefix?",opts:["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.255"],correct:2,why:"A /24 prefix has 24 network bits, represented by 255.255.255.0."},
  {q:"Which IPv4 address is in the RFC 1918 private range?",opts:["8.8.8.8","192.168.1.10","1.1.1.1","203.0.113.10"],correct:1,why:"192.168.0.0/16 is one of the private IPv4 ranges."},
  {q:"Which Linux command shows IP addresses on interfaces?",opts:["ip addr","ipconfig /all","tracert","nslookup"],correct:0,why:"The ip addr command displays interface addresses on modern Linux systems."},
  {q:"What does DHCP commonly provide to a client?",opts:["A domain's web page","Automatic IP configuration","Physical cable speed only","An encrypted tunnel"],correct:1,why:"DHCP can provide an IP address, subnet mask/prefix, gateway, DNS servers, and other settings."},
  {q:"If pinging an IP works but a domain lookup fails, what should you investigate first?",opts:["The monitor","DNS resolution","The keyboard","The subnet's broadcast address"],correct:1,why:"Working IP connectivity with failed name resolution suggests investigating DNS. Firewalls and policies can affect tests too."}
];
let quizIndex = 0, quizScore = 0, quizAnswers = [], selectedAnswer = null;
function renderQuiz() {
  const card = $("#quizCard");
  $("#quizProgressText").textContent = `${t("question")} ${Math.min(quizIndex+1,questions.length)} ${t("of")} ${questions.length}`;
  $("#quizProgress").style.width = `${(quizIndex / questions.length) * 100}%`;
  $("#quizScoreLabel").textContent = `${t("score")}: ${quizScore}`;
  if (quizIndex >= questions.length) {
    $("#quizProgress").style.width = "100%";
    card.innerHTML = `<div class="quiz-result"><div class="score-ring"><strong>${quizScore}/${questions.length}</strong></div><h3>${t("quizComplete")}</h3><p>${t("quizCompleteCopy")}</p><button class="primary-btn" id="restartInside" type="button">${t("restartQuiz")} ↻</button></div>`;
    $("#quizNext").hidden = true; $("#quizRestart").hidden = false;
    $("#restartInside").addEventListener("click", restartQuiz);
    return;
  }
  $("#quizNext").hidden = false; $("#quizRestart").hidden = true;
  const question = questions[quizIndex];
  const letters = ["A","B","C","D"];
  const feedback = selectedAnswer === null ? "" : `<div class="answer-feedback ${selectedAnswer===question.correct?'good':'bad'}">${selectedAnswer===question.correct?t("correct"):t("incorrect")} ${question.why}</div>`;
  card.innerHTML = `<div class="question-count">${t("question")} ${String(quizIndex+1).padStart(2,"0")}</div><h3>${question.q}</h3><div class="answers">${question.opts.map((option,index) => {
    let state = "";
    if (selectedAnswer !== null && index === question.correct) state = " correct";
    else if (selectedAnswer === index && selectedAnswer !== question.correct) state = " incorrect";
    return `<button type="button" class="answer-option${state}" data-answer="${index}" ${selectedAnswer!==null?"disabled":""}><span class="answer-letter">${letters[index]}</span><span>${option}</span></button>`;
  }).join("")}</div>${feedback}`;
  $$("[data-answer]",card).forEach(button => button.addEventListener("click", () => {
    if (selectedAnswer !== null) return;
    selectedAnswer = Number(button.dataset.answer);
    quizAnswers[quizIndex] = selectedAnswer;
    if (selectedAnswer === question.correct) quizScore++;
    renderQuiz();
    $("#quizNext").disabled = false;
    $("#quizNext").querySelector("span:first-child").textContent = quizIndex === questions.length-1 ? t("quizComplete") : t("nextQuestion");
  }));
  $("#quizNext").disabled = selectedAnswer === null;
  $("#quizNext").querySelector("span:first-child").textContent = quizIndex === questions.length-1 ? t("quizComplete") : t("nextQuestion");
}
function nextQuestion() {
  if (selectedAnswer === null) return;
  quizIndex++; selectedAnswer = null; renderQuiz();
}
function restartQuiz() {
  quizIndex = 0; quizScore = 0; quizAnswers = []; selectedAnswer = null; renderQuiz();
}
$("#quizNext").addEventListener("click", nextQuestion);
$("#quizRestart").addEventListener("click", restartQuiz);
$("#year").textContent = new Date().getFullYear();

initSubnet();
renderTroubleshooting();
renderQuiz();
