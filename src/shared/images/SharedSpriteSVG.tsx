export default function SharedSpriteSVG ({ name }: { name: string }) {
  switch (name) {
    case "linkedIn":
      return (
        <svg 
          className="fill-[#3892F5] dark:fill-[#D9D9D9]"
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          fill="none">
          <path 
            fillRule="evenodd" 
            d="M18 3c.7957 0 1.5586.3162 2.1213.8787A3.0008 3.0008 0 0 1 21 6v12a3.0005 3.0005 0 0 1-.8787 2.1213A3.0005 3.0005 0 0 1 18 21H6a3.0008 3.0008 0 0 1-2.1213-.8787A3.0005 3.0005 0 0 1 3 18V6c0-.7957.3162-1.5586.8787-2.1213A3.0007 3.0007 0 0 1 6 3h12ZM8 10a1.0001 1.0001 0 0 0-1 1v5a1.0001 1.0001 0 0 0 2 0v-5a1.0001 1.0001 0 0 0-1-1Zm3-1a1.0001 1.0001 0 0 0-1 1v6a1.0001 1.0001 0 0 0 1.707.707A1.0001 1.0001 0 0 0 12 16v-3.6599c.3049-.344.8201-.7481 1.3931-.9932.333-.1418.834-.1999 1.1819-.0898a.5495.5495 0 0 1 .2929.188c.052.0698.1321.2258.1321.5549v4a1.0001 1.0001 0 0 0 1.707.707A1.0001 1.0001 0 0 0 17 16v-4c0-.6699-.1699-1.2661-.5239-1.7439a2.5394 2.5394 0 0 0-1.3011-.907c-.9021-.2832-1.9011-.1262-2.5681.16a5.8435 5.8435 0 0 0-.623.312A.9992.9992 0 0 0 11 9ZM8 7a1.0001 1.0001 0 0 0 0 2 1.0001 1.0001 0 0 0 0-2Z"/>
        </svg>
      )
    case "instagram":
      return (
        <svg 
          className="fill-[#3892F5] dark:fill-[#D9D9D9]"
          xmlns="http://www.w3.org/2000/svg" 
          width="20.8303" 
          height="20.8303" 
          fill="none">
          <path 
            fillRule="evenodd" 
            d="M4.4641 0c-1.1838 0-2.3188.47-3.156 1.3069A4.4636 4.4636 0 0 0 0 4.4624v11.9038a4.4636 4.4636 0 0 0 4.4641 4.4641H16.368a4.4643 4.4643 0 0 0 4.4624-4.4641V4.4624A4.4644 4.4644 0 0 0 16.3679 0H4.4641Zm13.188 4.4692c0 .3409-.1355.668-.3767.909a1.2852 1.2852 0 0 1-1.8184 0 1.286 1.286 0 0 1 0-1.8181 1.2852 1.2852 0 0 1 1.8184 0c.2412.241.3767.568.3767.9091Zm-7.2344 2.3794a3.5643 3.5643 0 0 0-2.5212 1.0445 3.5649 3.5649 0 0 0 0 5.0424 3.5654 3.5654 0 0 0 6.0869-2.5212 3.5649 3.5649 0 0 0-1.0444-2.5212 3.5648 3.5648 0 0 0-2.5213-1.0445ZM5.136 10.4143a5.281 5.281 0 0 1 1.5464-3.7336 5.28 5.28 0 1 1-1.5464 3.7336Z"/>
        </svg>
      )
    case "facebook":
      return (
        <svg
          className="fill-[#3892F5] dark:fill-[#D9D9D9]" 
          xmlns="http://www.w3.org/2000/svg" 
          width="20.3513" 
          height="20.3513" 
          fill="none">
          <path  
            d="M17.3499 0H3C1.3501 0 0 1.3501 0 3v14.3513c0 1.6499 1.3501 3 3 3h14.3513c1.6499 0 3-1.3501 3-3V3c-.0014-1.6499-1.3501-3-3.0014-3Zm-.1929 10.8623h-2.4151v8.7376h-3.6135v-8.7376H9.321v-3.012h1.8074V6.0427c0-2.457 1.02-3.9187 3.9226-3.9187h2.4129v3.0112h-1.5091c-1.1281 0-1.2031.4224-1.2031 1.2076l-.0098 1.5075h2.7339l-.3188 3.012Z"/>
        </svg>
      )
    case "phone":
      return (
        <svg 
          className="fill-[#0F0F0F] dark:fill-[#D9D9D9] stroke-[#0F0F0F] dark:stroke-[#D9D9D9]"
          xmlns="http://www.w3.org/2000/svg" 
          width="17.751" 
          height="17.7507" 
          fill="none">
          <path 
            d="M16.4937 13.484c-.6204-.625-2.1226-1.5371-2.8516-1.9047-.9492-.4781-1.0274-.5172-1.7734.0372-.4976.3698-.8287.7004-1.4109.5761-.5826-.1242-1.8482-.8246-2.9563-1.9293-1.1082-1.1046-1.8492-2.407-1.974-2.9874-.1244-.5806.2115-.9075.578-1.4063.5163-.7031.4773-.8203.0359-1.7695-.3443-.7383-1.283-2.2266-1.9102-2.8438-.6711-.663-.6711-.5457-1.1035-.366-.352.1482-.69.3282-1.009.538-.625.415-.972.76-1.2144 1.2784-.2427.5184-.3516 1.7336.9011 4.0094 1.2527 2.2757 2.1316 3.4394 3.9507 5.2535 1.8191 1.8141 3.218 2.7894 5.2629 3.9363 2.5298 1.4169 3.5 1.1406 4.0201.8984.5197-.2422.8662-.5859 1.2822-1.2109a6.189 6.189 0 0 0 .5391-1.0078c.1801-.4308.2973-.4308-.3667-1.1016Z"/>
          <path 
            strokeWidth="1.5" 
            d="M13.6421 11.5793c-.9492-.4781-1.0274-.5172-1.7734.0372-.4976.3698-.8287.7004-1.4109.5761-.5826-.1242-1.8482-.8246-2.9563-1.9293-1.1082-1.1046-1.8492-2.407-1.974-2.9874-.1244-.5806.2115-.9075.578-1.4063.5163-.7031.4773-.8203.0359-1.7695-.3443-.7383-1.283-2.2266-1.9102-2.8438-.6711-.663-.6711-.5457-1.1035-.366-.352.1482-.69.3282-1.009.538-.625.415-.972.76-1.2144 1.2784-.2427.5184-.3516 1.7336.9011 4.0094 1.2527 2.2757 2.1316 3.4394 3.9507 5.2535 1.8191 1.8141 3.218 2.7894 5.2629 3.9363 2.5298 1.4169 3.5 1.1406 4.0201.8984.5197-.2422.8662-.5859 1.2822-1.2109a6.189 6.189 0 0 0 .5391-1.0078c.1801-.4308.2973-.4308-.3667-1.1016-.6204-.625-2.1226-1.5371-2.8516-1.9047Z"/>
        </svg>
      )
    case "mail":
      return (
        <svg 
          className="fill-[#0F0F0F] dark:fill-[#D9D9D9]"
          xmlns="http://www.w3.org/2000/svg" 
          width="17.01" 
          height="12" 
          fill="none">
          <path 
            d="M17.01 10.5v-9c0-.83-.6699-1.5-1.5-1.5H1.5C.67 0 0 .67 0 1.5v9c0 .83.67 1.5 1.5 1.5h14.01c.8301 0 1.5-.67 1.5-1.5ZM15.7 1.39c.33.33.1501.67-.0301.84l-4.0598 3.72 3.8999 4.06c.1199.14.2.36.0601.51-.1302.1601-.4302.15-.5601.0499l-4.3701-3.73L8.5 8.79 6.3701 6.84 2 10.5699c-.1299.1001-.43.1102-.56-.0499-.14-.15-.0601-.37.06-.51l3.8999-4.06-4.0598-3.72c-.1802-.17-.3601-.51-.03-.84.3298-.33.6699-.17.95.07L8.5 6.5l6.25-5.04c.28-.24.6201-.4.95-.07Z"/>
        </svg>
      )
  }
}