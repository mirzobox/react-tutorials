How to work React ?

<!-- - Element, component, node -->

-- Element - bu object React.createElement() dan qaytgan qiymat React element hisoblanadi

-- Node - React elementning o'zi React node hisoblanadi faqat bunda primitieve tiplar ham kirib ketadi undan tashqari shu nodelardan tashkil topgan array ham bo'lishi mumkin

-- React component is a function or class with render method which return a valid react node or array of react nodes

<!-- What is JSX ? -->

-- JSX - createElement() ni sintaksis osonlashtirilgan versiyasi ya'ni javascript kodi ichida html, html kodi ichida javascript yozish imkonini beradi. JSX is not template engine

Aslida funksiyalarda name degan property bo'ladi, lekin arrow functionda bu narsa default holatda yo'q bo'ladi. Agar biz componentlarni arrow function bilan yozsak ba'zi run timelar uning nomini o'zi beradi

<!-- Component instance -->
<!-- Qolib ketdi, ko'rib chiqamiz qayta... -->

Reactga elementlarga unique key masalasida agar bir key bermasak React shundoq ham indexdan foydalanadi. Agar biz o'zimiz indexdan foydalansak u shunchaki warningni o'chiradi holos boshqa hech narsa qilib bermaydi. Agar ma'lumotimiz o'zgarmaydigan static bo'lsa index bersak bo'ladi muammosi yo'q.

Function component bilan class componentni katta farqlaridan biri biz funksiya yozadigan bo'lsak u funksiya qayta render bo'lganda yana qayta yaratiladi class componentda esa qayta yaratilmaydi. Hamda class componentlar bilan error boundry qilib bo'lmaydi !

Elementlarga key berishda unique bo'lish kerak degan qonun butun application bo'yicha emas o'sha render bo'layotgan listlar orasida unique bo'lish kerak
