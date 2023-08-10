interface LightingProps {
  fillColor: string,
  height: string,
  width: string,
}

const Lighting = (props: LightingProps) => {
  const { fillColor = '#4B4D57', height = '32', width = '32' } = props

  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.16678 12.9121C3.05704 13.5919 3 14.2893 3 15C3 15.5074 3.02903 16.008 3.08553 16.5001H6.36851L6.55196 17.2676C6.78396 18.2382 7.1618 19.1524 7.66138 19.986L7.94497 20.4592L6.31803 23.6755C7.02748 24.4668 7.83236 25.1705 8.71451 25.7685L10.7819 23.236L11.5044 23.614C12.8476 24.3166 14.3759 24.7143 16 24.7143C17.6241 24.7143 19.1524 24.3166 20.4956 23.614L21.2181 23.236L23.2855 25.7685C24.2315 25.1271 25.0887 24.3643 25.8346 23.5023L24.0305 20.5008L24.339 19.986C24.8386 19.1524 25.2165 18.2382 25.4485 17.2676L25.6319 16.5001H28.9145C28.971 16.008 29 15.5074 29 15C29 14.2817 28.9417 13.577 28.8297 12.8904L25.3842 12.4049L25.1844 11.8266C24.7098 10.4529 23.9351 9.21774 22.9374 8.2001L22.5396 7.79429L23.4501 4.34516C22.5896 3.74237 21.6527 3.24116 20.6568 2.85895L18.9902 5.7243L18.2671 5.55151C17.5408 5.37792 16.7818 5.28577 16 5.28577C15.2182 5.28577 14.4592 5.37792 13.7329 5.55151L13.1056 5.7014L11.0052 2.99415C10.0048 3.41082 9.06766 3.94889 8.21213 4.58994L9.52806 7.72569L9.06298 8.2001C8.06537 9.21774 7.29058 10.4529 6.81602 11.8266L6.61786 12.4002L3.16678 12.9121ZM3.68908 10.8127L5.14196 10.5972C5.63584 9.38029 6.32796 8.26581 7.17777 7.29363L6.63011 5.98859C5.3234 7.34695 4.30926 8.98879 3.68908 10.8127ZM13.0297 2.34088L13.9075 3.47229C14.5871 3.34968 15.2865 3.28577 16 3.28577C16.6799 3.28577 17.3469 3.3438 17.9962 3.45534L18.6817 2.2769C17.8163 2.09542 16.9193 2 16 2C14.9781 2 13.9837 2.11791 13.0297 2.34088ZM25.145 5.76045L24.7593 7.22171C25.637 8.20949 26.3506 9.34736 26.8566 10.5926L28.3055 10.7968C27.6495 8.87592 26.5565 7.15761 25.145 5.76045ZM30.6526 11.7758C29.1775 5.04107 23.1774 0 16 0C7.71573 0 1 6.71573 1 15C1 17.5777 1.651 20.0058 2.79783 22.1262L2.67527 22.1949C1.27796 22.9781 0.742393 24.7209 1.45875 26.1536L3.55279 30.3416C4.06096 31.358 5.09975 32 6.23607 32H25.3394C26.4159 32 27.41 31.4231 27.9441 30.4884L30.3677 26.2471C31.1946 24.8001 30.6835 22.9565 29.2297 22.1417L29.2022 22.1262C29.9395 20.763 30.4718 19.2726 30.758 17.697C30.7605 17.6849 30.7627 17.6727 30.7646 17.6604C30.9193 16.7967 31 15.9077 31 15C31 13.901 30.8818 12.8297 30.6575 11.7979C30.6559 11.7905 30.6543 11.7831 30.6526 11.7758ZM28.5237 18.5001H27.1822C26.9661 19.1912 26.6877 19.8547 26.3538 20.4839L27.1137 21.7482C27.7234 20.7465 28.2014 19.6559 28.5237 18.5001ZM28.1339 23.8202C25.4081 27.5639 20.9888 30 16 30C11.0112 30 6.59191 27.5639 3.86606 23.8202L3.65311 23.9396C3.18734 24.2006 3.00882 24.7816 3.2476 25.2591L5.34164 29.4472C5.51103 29.786 5.8573 30 6.23607 30H6.73381L6.14251 29.0145C5.85836 28.5409 6.01192 27.9267 6.4855 27.6425C6.95908 27.3584 7.57334 27.5119 7.85749 27.9855L9.06619 30H16H22.5194L24.2191 27.8753C24.5641 27.444 25.1934 27.3741 25.6247 27.7191C26.056 28.0641 26.1259 28.6934 25.7809 29.1247L25.0806 30H25.3394C25.6982 30 26.0296 29.8077 26.2076 29.4961L28.6312 25.2548C28.9068 24.7725 28.7365 24.158 28.2519 23.8863L28.1339 23.8202ZM4.97719 21.8954L5.66945 20.5268C5.32536 19.8848 5.03924 19.2069 4.81822 18.5001H3.47634C3.81447 19.7127 4.32402 20.8536 4.97719 21.8954ZM21.523 26.7721L20.6814 25.7412C19.2467 26.3673 17.6628 26.7143 16 26.7143C14.3372 26.7143 12.7533 26.3673 11.3186 25.7412L10.477 26.7721C12.1535 27.5599 14.0254 28 16 28C17.9746 28 19.8465 27.5599 21.523 26.7721ZM8 14C8.55228 14 9 14.4477 9 15C9 18.866 12.134 22 16 22C19.866 22 23 18.866 23 15C23 14.4477 23.4477 14 24 14C24.5523 14 25 14.4477 25 15C25 19.9706 20.9706 24 16 24C11.0294 24 7 19.9706 7 15C7 14.4477 7.44772 14 8 14Z" fill={fillColor} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1319 11.0039C10.4059 10.5244 11.0168 10.3578 11.4963 10.6318L14.9963 12.6318C15.4758 12.9058 15.6424 13.5167 15.3684 13.9962C15.0944 14.4757 14.4835 14.6423 14.004 14.3683L10.504 12.3683C10.0245 12.0943 9.85792 11.4834 10.1319 11.0039ZM21.281 10.8754C21.626 11.3066 21.5561 11.9359 21.1249 12.2809L18.6249 14.2809C18.1936 14.6259 17.5643 14.556 17.2193 14.1247C16.8743 13.6935 16.9442 13.0642 17.3755 12.7192L19.8755 10.7192C20.3067 10.3742 20.936 10.4441 21.281 10.8754Z" fill={fillColor} />
    </svg>
  )
}

export default Lighting
