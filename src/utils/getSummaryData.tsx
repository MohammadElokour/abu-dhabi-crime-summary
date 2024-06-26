import {
  ComplexChart,
  WeeklyCrimeRates,
  WeeklyReportRates,
} from "@src/components/Charts";

export const getSummaryData = (summaryId: string) => {
  switch (summaryId) {
    case "abu-dhabi":
      return {
        title: "أبو ظبي",
        summary: `
         <p>يقدم هذا الملخص لمحة سريعة عن أهم الجرائم المقلقة التي حدثت في مدينة ابوظبي في 2024-7-6 الجرائم المقلقة</p>
          <ul>
            <li id="head">:السرقة</li>
            <ul>
              <li id="info">تم الإبلاغ عن 5 حادثة سرقة في مدينة خليفة، حيث كانت اغلب عملايات السرقة في فيلل مستقلة</li>
              <li id="info">لا يزال المشتبه بهم طلقاء</li>
            </ul>
            <li id="head">:الاعتداء</li>
            <ul>
              <li id="info">تعرض شخص واحد من الجالية النيجيرية للإعتداء في منطقة المنهل</li>
              <li id="info">أصيب الضحية بجروح خطيرة</li>
              <li id="info">تم القبض على المشتبه به</li>
            </ul>
            <li id="head">:المخدرات</li>
            <ul>
              <li id="info">ضبطت الشرطة 1 كيلو غرام من مخدرات الماريجوانا في منطقة مصفح في المربع رقم 15، وهذه ليست المرة الأولى حيث لوحظ انتشار لجرائم المخدرات في هذه لمنطقة</li>
              <li id="info">تم القبض على 3 أشخاص من الجالية الأوغندية</li>
            </ul>
          </ul>
        `,
        charts: { sideChart: <WeeklyCrimeRates />, bottomChart: null },
        layout: {
          flexLeft: 1,
          flexRight: 1,
        },
      };
    case "sector-in-al-manhal":
      return {
        title: "قطاع في المنهل",
        summary: `تعد هذه المنطقة من أكثر المناطق الساخنة في منطقة المنهل، حيث تنتشر فيها مختلف الأنواع من الجرائم، وقد لوحظ في الأسبوعين السابقين انتشار جريمة السرقة  باستخدام اسلوب النشل والتهديد بين اوساط الجالية الفليبينية وكان اغلب الضحايا هم من سكان تلك المناطق
لم تنتشر هذه الجرائم في السابق بين افراد هذه الجالية وهي ظاهرة مستحدثة
`,
        charts: { sideChart: null, bottomChart: <ComplexChart /> },
        layout: {
          flexLeft: 0,
          flexRight: 1,
        },
      };
    case "police-station":
      return {
        title: "مركز شرطة المدينة الشامل",
        summary: `
          <p>يعد مركز شرطة المدينة الشامل من اكثر المراكز اهمية في منطقة رأس الخيمة، حيث يتلقى بمعدل 10 بلاغات مقلقة اسبوعيا، وقد لوحظ انه بالأونة الأخيرة، تلقى المركز بلاغات مقلقة بشكل متزايد في منطقة الاختصاص التابعة له وهي منطقة العرقوب. حيث لوحظ تزايد في استخدام الاساليب الأجرامية الأتية:</p>
          <ol>
            <li id="info">التعرض لمركبة متحركة</li>
            <li id="info">الفتح بإستعمال مفاتيح مصطنعة</li>
            <li id="info">الابتزا</li>
          </ol>
        `,
        charts: {
          sideChart: <WeeklyReportRates />,
          bottomChart: <ComplexChart />,
        },
        layout: {
          flexLeft: 1,
          flexRight: 1,
        },
      };
    default:
      return {
        title: "Abu Dhabi",
        summary: `
         <p>يقدم هذا الملخص لمحة سريعة عن أهم الجرائم المقلقة التي حدثت في مدينة ابوظبي في 2024-7-6</p>
          <p>:الجرائم المقلقة</p>
          <ul>
            <li id="head">:السرقة</li>
            <ul>
              <li id="info">تم الإبلاغ عن 5 حادثة سرقة في مدينة خليفة، حيث كانت اغلب عملايات السرقة في فيلل مستقلة</li>
              <li id="info">لا يزال المشتبه بهم طلقاء</li>
            </ul>
            <li id="head">:الاعتداء</li>
            <ul>
              <li id="info">تعرض شخص واحد من الجالية النيجيرية للإعتداء في منطقة المنهل</li>
              <li id="info">أصيب الضحية بجروح خطيرة</li>
              <li id="info">تم القبض على المشتبه به</li>
            </ul>
            <li id="head">:المخدرات</li>
            <ul>
              <li id="info">ضبطت الشرطة 1 كيلو غرام من مخدرات الماريجوانا في منطقة مصفح في المربع رقم 15، وهذه ليست المرة الأولى حيث لوحظ انتشار لجرائم المخدرات في هذه لمنطقة</li>
              <li id="info">تم القبض على 3 أشخاص من الجالية الأوغندية</li>
            </ul>
          </ul>
        `,
        charts: { sideChart: <WeeklyCrimeRates />, bottomChart: <></> },
        layout: {
          flexLeft: 1,
          flexRight: 1,
        },
      };
  }
};
