interface InteriorProps {
  fillColor: string,
  height: string,
  width: string,
}

const Interior = (props: InteriorProps) => {
  const { fillColor = '#4B4D57', height = '32', width = '32' } = props

  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_612_8415)">
        <path d="M11.7291 31.4199C11.4919 31.3338 11.296 31.1611 11.1808 30.9366C11.0656 30.712 11.0395 30.4522 11.1078 30.2093C11.1762 29.9663 11.3338 29.7582 11.5492 29.6266C11.7646 29.4951 12.0217 29.4498 12.2691 29.4999C15.6776 30.4395 19.3154 30.0546 22.4518 28.4226C25.5883 26.7906 27.9911 24.0322 29.1776 20.7016C30.3641 17.371 30.2465 13.7148 28.8484 10.4673C27.4504 7.21984 24.8753 4.62162 21.6405 3.19449C18.4056 1.76735 14.7506 1.61702 11.4095 2.77368C8.06842 3.93034 5.28868 6.30832 3.62861 9.43001C1.96855 12.5517 1.5511 16.1859 2.46011 19.6027C3.36912 23.0195 5.53726 25.9658 8.52908 27.8499C8.64088 27.9194 8.73787 28.0102 8.81449 28.1172C8.8911 28.2242 8.94585 28.3453 8.97558 28.4735C9.00531 28.6017 9.00944 28.7345 8.98773 28.8643C8.96602 28.9941 8.91891 29.1184 8.84908 29.2299C8.77884 29.3409 8.68742 29.437 8.58004 29.5126C8.47267 29.5883 8.35145 29.642 8.2233 29.6708C8.09515 29.6996 7.96258 29.7028 7.83317 29.6804C7.70376 29.6579 7.58004 29.6102 7.46908 29.5399C4.0485 27.3876 1.56914 24.0205 0.529122 20.1152C-0.510891 16.2099 -0.0345018 12.0557 1.86258 8.48724C3.75966 4.91875 6.93688 2.20037 10.7559 0.878231C14.5749 -0.443905 18.7528 -0.271836 22.4502 1.35987C26.1476 2.99157 29.0905 5.96202 30.6877 9.67442C32.2849 13.3868 32.4181 17.5661 31.0605 21.3727C29.7028 25.1792 26.955 28.331 23.369 30.1948C19.783 32.0586 15.6245 32.4963 11.7291 31.4199V31.4199Z" fill={fillColor} />
        <path d="M13.6884 27.7799C11.3474 27.3215 9.19619 26.1757 7.50941 24.4889C5.82264 22.8021 4.67687 20.6509 4.2184 18.3099C4.18795 18.1567 4.19382 17.9984 4.23555 17.8479C4.27729 17.6973 4.35372 17.5586 4.45872 17.4429C4.56372 17.3272 4.69436 17.2378 4.84018 17.1817C4.986 17.1256 5.14294 17.1044 5.2984 17.1199L13.1884 17.9199C13.4163 17.9439 13.629 18.0453 13.791 18.2073C13.953 18.3693 14.0545 18.5821 14.0784 18.8099L14.8784 26.6999C14.8939 26.8554 14.8728 27.0123 14.8167 27.1581C14.7606 27.304 14.6711 27.4346 14.5554 27.5396C14.4397 27.6446 14.301 27.721 14.1504 27.7628C13.9999 27.8045 13.8416 27.8104 13.6884 27.7799ZM6.5384 19.2599C7.03297 20.6964 7.84836 22.0014 8.92265 23.0757C9.99694 24.15 11.3019 24.9653 12.7384 25.4599L12.1784 19.8199L6.5384 19.2599Z" fill={fillColor} />
        <path d="M17.1182 26.6999L17.9182 18.8099C17.9422 18.5821 18.0436 18.3693 18.2056 18.2073C18.3676 18.0453 18.5804 17.9439 18.8082 17.9199L26.6982 17.1199C26.8537 17.1044 27.0106 17.1256 27.1564 17.1817C27.3023 17.2378 27.4329 17.3272 27.5379 17.4429C27.6429 17.5586 27.7193 17.6973 27.7611 17.8479C27.8028 17.9984 27.8087 18.1567 27.7782 18.3099C27.3197 20.6509 26.174 22.8021 24.4872 24.4889C22.8004 26.1757 20.6492 27.3215 18.3082 27.7799C18.155 27.8104 17.9967 27.8045 17.8462 27.7628C17.6956 27.721 17.5569 27.6446 17.4412 27.5396C17.3255 27.4346 17.2361 27.304 17.18 27.1581C17.1239 27.0123 17.1027 26.8554 17.1182 26.6999V26.6999ZM19.8182 19.8199L19.2582 25.4599C20.6947 24.9653 21.9997 24.15 23.074 23.0757C24.1483 22.0014 24.9636 20.6964 25.4582 19.2599L19.8182 19.8199Z" fill={fillColor} />
        <path d="M26.799 14.8799C26.579 14.8799 17.049 12.9999 15.999 12.9999C15.349 12.9999 10.049 13.9999 5.38896 14.8599C5.22867 14.8905 5.06332 14.8815 4.90733 14.8335C4.75134 14.7856 4.60946 14.7002 4.49407 14.5848C4.37867 14.4694 4.29327 14.3275 4.24532 14.1715C4.19736 14.0155 4.18832 13.8502 4.21896 13.6899C4.74993 10.9553 6.21575 8.4906 8.36507 6.71847C10.5144 4.94634 13.2133 3.97717 15.999 3.97717C18.7846 3.97717 21.4835 4.94634 23.6329 6.71847C25.7822 8.4906 27.248 10.9553 27.779 13.6899C27.8069 13.8345 27.8026 13.9835 27.7664 14.1262C27.7301 14.269 27.6627 14.4019 27.5691 14.5156C27.4755 14.6293 27.3579 14.7209 27.2248 14.7839C27.0916 14.8469 26.9462 14.8796 26.799 14.8799ZM15.999 10.9999C16.879 10.9999 22.439 11.9999 25.409 12.5999C24.7123 10.6626 23.4346 8.98758 21.7505 7.80348C20.0663 6.61939 18.0577 5.98397 15.999 5.98397C13.9402 5.98397 11.9316 6.61939 10.2475 7.80348C8.56331 8.98758 7.28566 10.6626 6.58896 12.5999C9.55896 11.9999 15.119 10.9999 15.999 10.9999Z" fill={fillColor} />
        <path d="M16 21C15.0111 21 14.0444 20.7068 13.2222 20.1574C12.3999 19.6079 11.759 18.8271 11.3806 17.9134C11.0022 16.9998 10.9031 15.9945 11.0961 15.0246C11.289 14.0546 11.7652 13.1637 12.4645 12.4645C13.1637 11.7652 14.0546 11.289 15.0246 11.0961C15.9945 10.9031 16.9998 11.0022 17.9134 11.3806C18.8271 11.759 19.6079 12.3999 20.1574 13.2222C20.7068 14.0444 21 15.0111 21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21ZM16 13C15.4067 13 14.8266 13.1759 14.3333 13.5056C13.8399 13.8352 13.4554 14.3038 13.2284 14.852C13.0013 15.4001 12.9419 16.0033 13.0576 16.5853C13.1734 17.1672 13.4591 17.7018 13.8787 18.1213C14.2982 18.5409 14.8328 18.8266 15.4147 18.9424C15.9967 19.0581 16.5999 18.9987 17.1481 18.7716C17.6962 18.5446 18.1648 18.1601 18.4944 17.6667C18.8241 17.1734 19 16.5933 19 16C19 15.2044 18.6839 14.4413 18.1213 13.8787C17.5587 13.3161 16.7957 13 16 13Z" fill={fillColor} />
      </g>
      <defs>
        <clipPath id="clip0_612_8415">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Interior
