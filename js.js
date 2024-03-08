///--------------------------------------------------------------
//----------------((((   DHIKR - APP   ))))
///--------------------------------------------------------------
///--------------------------------------------------------------
//عند النقر على الزر "🤲"،
// يتم زيادة العداد بواحد وتظهر رسالة البوب ​​آب لتعرض العدد الحالي.
//عند النقر على الزر "اعادة"،
// يتم إعادة تهيئة العداد إلى الصفر.
//يتم تحديث العرض على الصفحة بشكل مستمر ليعكس قيمة العداد الحالية.

///--------------------------------------------------------------
let count = 0; // نقوم هنا بتهيئة متغير يدعى "count" بقيمة الصفر. هذا المتغير سيتم استخدامه لتتبع عدد المرات التي يتم فيها النقر على الزر.
const counterElement = document.getElementById("counter"); // هنا نقوم بالعثور على العنصر في الصفحة حيث نريد عرض العداد، عن طريق استخدام معرف العنصر "counter" الذي يحمل نفس الاسم في الصفحة.
const popUpElement = document.getElementById("pop-up"); // نقوم هنا بالعثور على العنصر في الصفحة حيث نريد عرض رسالة البوب ​​آب، عن طريق استخدام معرف العنصر "pop-up" الذي يحمل نفس الاسم في الصفحة.
let popUpTimeout; // هذا المتغير يتم استخدامه لتخزين المؤقت الذي سيتم إعداده لإخفاء رسالة البوب ​​آب بعد فترة معينة.

function increment() { // هذه الدالة تنفذ عند النقر على الزر لزيادة العداد.
  count++; // في كل مرة يتم فيها النقر على الزر، يتم زيادة قيمة المتغير "count" بواحد.
  updateCounter(); // بعد زيادة قيمة المتغير "count"، يتم تحديث العرض على الصفحة لعرض العدد الجديد.

  clearTimeout(popUpTimeout); // نقوم هنا بمسح المؤقت السابق إذا كان موجودًا لمنع ظهور رسائل بوب ​​آب متعددة في حالة النقر المتكرر بسرعة.
  showPopUp(); // بعد ذلك، نقوم بعرض رسالة البوب ​​آب مرة أخرى.
}

function reset() { // هذه الدالة تقوم بإعادة تهيئة العداد إلى الصفر عند النقر على زر إعادة الضبط.
  count = 0; // نقوم هنا بتحديث قيمة المتغير "count" لتكون صفر.
  updateCounter(); // بعد إعادة تهيئة العداد، نقوم بتحديث العرض على الصفحة لعرض العدد الجديد.
}

function updateCounter() { // هذه الدالة تقوم بتحديث العرض على الصفحة لعرض قيمة العداد الحالية.
  counterElement.textContent = count; // نقوم هنا بتحديث نص العداد في العنصر المستهدف على الصفحة لعرض العدد الحالي.
}

function showPopUp() { // هذه الدالة تقوم بعرض رسالة البوب ​​آب على الصفحة.
  popUpElement.style.animation = "none"; // نقوم هنا بإيقاف أي تحركات سابقة لرسالة البوب ​​آب.
  void popUpElement.offsetWidth; // نقوم بتنشيط إعادة التحميل لتطبيق إيقاف التحركات على الفور.
  popUpElement.style.animation = null; // ثم نقوم بإعادة تشغيل التحركات مرة أخرى لتبدأ من البداية.

  popUpElement.textContent = `اللهم صل وسلم وبارك على سيدنا محمد (${count})`; // نقوم هنا بتحديث نص رسالة البوب ​​آب ليحمل العدد الحالي.
  popUpElement.style.display = "block"; // نقوم هنا بجعل عنصر رسالة البوب ​​آب مرئيًا على الصفحة.

  popUpTimeout = setTimeout(() => { // هذا المؤقت يقوم بإعداد مؤقت لإخفاء رسالة البوب ​​آب بعد مرور فترة زمنية معينة.
    popUpElement.style.display = "none"; // بعد انتهاء المدة، نخفي رسالة البوب ​​آب.
  }, 1000); // هنا نحدد المدة بملي ثانية، لذلك ستظل رسالة البوب ​​آب مرئية لمدة ثانية واحدة قبل أن تختفي.
}
