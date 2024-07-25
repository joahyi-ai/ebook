const faqs = [
  {
    id: 1,
    question: "How to find an Instagram user name?",
    answer: "You will find a user name like this: shopify",
    image: "/followers.png", // 新增的图片URL
  },
  {
    id: 2,
    question: "How to find an Instagram post hashtag?",
    answer: "You will find a user name like this: contentcreators",
    image: "/hashtag.png", // 新增的图片URL
  },
  {
    id: 3,
    question: " How to find an Instagram post link?",
    answer:
      "You will find a link like this: e.g. https://www.instagram.com/p/CpxmyyFLCbX/",
    image: "/likes.png", // 新增的图片URL
  },
  {
    id: 4,
    question: " How to find an Instagram location link?",
    answer:
      "You will find a link like this: e.g. https://www.instagram.com/explore/locations/318970446/",
    image: "/location.png", // 新增的图片URL
  },
  {
    id: 5,
    question: "How to cancel my subscription?",
    answer:
      "You can cancel your premium subscription at any time, by clicking the PRO button, and finally clicking the  MANAGE SUBSCRIPTION button.",
  },

  // More questions...
];

export default function FAQs() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6  lg:px-8 ">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-3">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-9 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
                {faq.image && <img src={faq.image} alt={faq.question} />}{" "}
                {/* 如果存在图片，就渲染<img>标签 */}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
