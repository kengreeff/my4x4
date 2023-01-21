type LogoWithTracksProps = {
  height: number,
  width: number,
}

const LogoWithTracks = (props: LogoWithTracksProps) => {
  const { height, width } = props

  return (
    <svg width={width} height={height} viewBox="0 0 232 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M59.8775 0.649643C58.308 0.962286 56.5811 1.49523 56.3436 1.7403C56.1227 1.96817 56.2135 2.63139 56.6958 4.31253C57.0687 5.6119 57.2866 6.22111 57.5844 6.7954L57.7671 7.14777L59.4107 7.15567C61.4693 7.16557 61.8632 7.09046 62.2558 6.61276C63.1101 5.57326 63.3358 4.56383 63.0421 3.09624C62.7775 1.77466 62.4664 1.02329 62.0778 0.767724C61.6649 0.496145 60.8635 0.453144 59.8775 0.649643ZM110.637 3.35948C109.067 3.67213 107.34 4.20507 107.103 4.45014C106.882 4.67801 106.973 5.34123 107.455 7.02237C107.828 8.32174 108.046 8.93095 108.343 9.50524L108.526 9.85761L110.17 9.86551C112.228 9.87541 112.622 9.8003 113.015 9.3226C113.869 8.2831 114.095 7.27367 113.801 5.80608C113.537 4.4845 113.225 3.73313 112.837 3.47756C112.424 3.20599 111.623 3.16298 110.637 3.35948ZM198.482 1.94552C198.303 2.00176 197.648 2.3153 197.027 2.64227C195.63 3.37687 195.364 3.70432 195.474 4.55421C195.591 5.46149 197.429 8.74393 197.968 9.00799C198.244 9.14316 199.053 8.80555 200.61 7.90558C202.071 7.06092 202.915 6.3848 202.906 6.06671C202.895 5.71627 201.956 2.68577 201.806 2.51799C201.307 1.96079 199.45 1.64106 198.482 1.94552ZM71.5003 8.0136C71.3136 8.15926 71.0025 8.90143 70.6703 9.99467C70.5038 10.5419 70.6482 10.8647 71.3405 11.4942C71.8746 11.9798 72.7762 12.2453 73.8648 12.2378C74.3958 12.2342 74.5297 12.1923 74.7541 11.9594C75.0961 11.6045 75.3181 10.6657 75.3676 9.36448C75.4133 8.16274 75.423 8.17445 74.2633 8.02934C72.8339 7.85049 71.7176 7.84417 71.5003 8.0136ZM184.707 5.6338C184.371 5.82487 182.844 7.39674 182.68 7.71986C182.541 7.99405 182.556 8.0368 182.965 8.5135C183.608 9.26448 185.538 10.9369 185.753 10.9293C185.856 10.9257 186.397 10.655 186.956 10.3278C188.086 9.66619 188.2 9.49053 188.059 8.62633C187.93 7.84264 187.5 7.14175 186.623 6.28727C185.856 5.54063 185.763 5.48212 185.358 5.49618C185.118 5.50459 184.825 5.56645 184.707 5.6338ZM205.511 6.09764C205.399 6.12977 205.287 6.35058 205.216 6.67862C205.152 6.9697 204.969 7.39601 204.808 7.62613C204.46 8.12327 203.45 8.92759 202.373 9.5672C201.92 9.83539 201.595 10.1004 201.597 10.1992C201.599 10.2928 201.51 10.6516 201.399 10.9966C201.287 11.3415 201.209 11.6351 201.225 11.6491C201.24 11.663 202.844 11.6912 204.789 11.7116C207.658 11.7418 208.34 11.7226 208.407 11.6097C208.549 11.3715 208.577 9.02139 208.443 8.61848C208.375 8.41464 208.098 7.73691 207.828 7.11254L207.336 5.97721L206.514 6.01147C206.062 6.03033 205.61 6.06904 205.511 6.09764ZM191.153 6.72648C190.599 6.78139 190.125 6.84719 190.1 6.87274C190.076 6.89829 190.132 7.20519 190.226 7.55469C190.594 8.9216 190.421 10.3698 189.803 11.0955C189.623 11.307 189.496 11.4989 189.521 11.5219C189.545 11.5448 190.487 11.5735 191.612 11.5854L193.659 11.6072L193.63 10.5199C193.604 9.53615 193.563 9.34452 193.205 8.51214C192.649 7.22223 192.327 6.58728 192.238 6.60845C192.196 6.61843 191.708 6.67147 191.153 6.72648ZM222.575 6.28607C219.753 6.56652 215.344 7.47996 214.152 8.03105C213.582 8.29435 213.512 8.54491 213.305 11.0531C213.215 12.1424 213.121 13.1544 213.096 13.302C213.071 13.4496 213.011 14.1136 212.963 14.7776C212.881 15.9175 212.89 16.0105 213.119 16.4437C213.673 17.4934 215.847 19.0902 217.361 19.5607C218.389 19.88 219.381 19.9125 221.665 19.7017C224.779 19.4144 225.917 18.99 226.56 17.8758C226.937 17.2231 227.103 16.3387 227.071 15.1536C227.034 13.7361 226.748 11.5548 226.31 9.337C225.849 7.00142 225.597 6.36564 225.087 6.24162C224.807 6.17374 223.466 6.19743 222.575 6.28607ZM176.195 8.03949C175.387 8.1363 174.556 8.22398 174.349 8.2343L173.973 8.25306L174.599 8.77064C175.38 9.41531 175.701 9.99465 175.722 10.7965L175.738 11.3956L176.313 11.4408C176.629 11.4658 177.465 11.4831 178.171 11.4792L179.455 11.4724L179.445 11.112C179.435 10.7526 178.837 9.27383 178.317 8.3245C178.138 7.99798 177.977 7.83111 177.854 7.84379C177.75 7.85457 177.004 7.94257 176.195 8.03949ZM160.78 8.81803C159.054 9.02703 157.625 9.21695 157.602 9.23998C157.58 9.2629 157.73 9.73289 157.937 10.2842L158.312 11.2867L160.442 11.2997C161.614 11.3069 163.224 11.3254 164.021 11.3409L165.469 11.3689L165.191 10.7059C164.753 9.66187 164.1 8.40754 164.004 8.42335C163.956 8.43136 162.505 8.60893 160.78 8.81803ZM146.762 10.3522C145.235 10.5468 143.999 10.7419 144.015 10.7855C144.032 10.8291 144.047 10.9299 144.049 11.0094C144.052 11.1236 144.495 11.1571 146.156 11.169C147.313 11.1772 148.91 11.1968 149.706 11.2125L151.153 11.241L150.846 10.5927L150.539 9.9444L150.039 9.97127C149.763 9.98595 148.289 10.1574 146.762 10.3522ZM171.696 9.83587C171.217 10.3692 170.561 11.2243 170.23 11.7485L169.936 12.2145L170.38 12.8128C170.896 13.5082 171.084 13.5615 171.831 13.2239C172.585 12.8828 173.881 11.4048 173.868 10.9018C173.861 10.6324 173.118 9.95662 172.524 9.68011C172.286 9.56904 172.074 9.47864 172.054 9.47918C172.033 9.47973 171.872 9.6403 171.696 9.83587ZM45.0856 14.9469C43.2402 15.485 41.8041 16.9622 41.3096 18.831C41.1804 19.3189 41.1121 24.3869 40.9196 47.7163C40.7019 74.1274 40.6986 76.0566 40.8721 76.7102C41.4276 78.8033 43.2472 80.4175 45.3568 80.689C45.7732 80.7425 63.4952 80.9426 84.7392 81.1336C105.983 81.3246 145.231 81.6817 171.956 81.927C211.449 82.2896 220.678 82.3475 221.249 82.2363C223.156 81.8644 224.832 80.3326 225.381 78.4606C225.559 77.855 225.593 77.2288 225.632 73.8069C225.657 71.6323 225.676 69.747 225.675 69.6171C225.673 69.4335 225.577 69.3556 225.239 69.2664C224.697 69.123 224.083 68.6615 223.71 68.1156C223.136 67.2763 222.15 64.1712 221.933 62.5197C221.819 61.6576 222.017 60.8261 222.469 60.2629C222.861 59.775 223.82 59.2357 224.748 58.9813C225.139 58.8741 225.527 58.7432 225.609 58.6905C225.732 58.6116 225.786 55.4065 225.912 40.77C225.996 30.9666 226.064 22.8199 226.064 22.6665L226.062 22.3874L225.241 22.6019C224.052 22.9125 222.149 23.126 219.966 23.1937C218.317 23.2448 217.936 23.224 217.176 23.0411C214.503 22.397 211.465 20.342 210.216 18.3334C210.03 18.0326 209.776 17.4364 209.653 17.0085L209.429 16.2304L208.733 16.2187C205.725 16.1681 46.8302 14.7332 46.3244 14.7521C45.9643 14.7655 45.4069 14.8532 45.0856 14.9469ZM16.2617 17.9702C14.9439 18.0891 13.854 18.1986 13.8396 18.2135C13.8251 18.2284 14.0266 18.9047 14.2874 19.7165C14.5482 20.5282 14.7655 21.3375 14.7702 21.515C14.7851 22.0748 14.4139 23.3035 13.6609 25.1868C13.0047 26.8281 12.5418 28.0892 12.5454 28.2258C12.547 28.2869 15.36 28.0758 15.6188 27.9952C15.7196 27.9638 15.9729 27.6921 16.1818 27.3914C16.3932 27.087 16.7158 26.7768 16.9098 26.6914C17.2535 26.5402 19.6975 25.9855 19.7442 26.0482C19.7574 26.0659 19.8827 26.3581 20.0227 26.6974C20.4648 27.7695 20.3713 28.5073 19.3624 31.9027C19.0034 33.1109 18.7122 34.1921 18.7152 34.3053C18.7197 34.4729 18.7762 34.4989 19.0193 34.4449C19.1835 34.4083 19.8736 34.2826 20.5528 34.1654L21.7877 33.9523L22.0856 33.5069C22.8206 32.4086 22.7255 32.4573 26.0141 31.4927L27.3148 31.1112L27.3179 30.0978C27.3197 29.5404 27.2613 28.375 27.1882 27.5079L27.0553 25.9315L26.3288 24.6108C25.9292 23.8845 25.543 23.2697 25.4704 23.2446C25.3979 23.2196 24.5433 23.3425 23.5713 23.5177C22.5992 23.693 21.7604 23.8375 21.7073 23.8389C21.6526 23.8404 21.6207 23.1115 21.6338 22.1557L21.6569 20.4699L21.0427 19.0734L20.4287 17.6769L19.543 17.7154C19.056 17.7366 17.5794 17.8513 16.2617 17.9702ZM35.9804 17.5809C35.6602 17.697 35.3549 17.858 35.302 17.9387C35.2491 18.0192 35.2411 18.3459 35.2843 18.6645C35.4282 19.725 36.3775 22.7916 36.5173 22.6474C36.5522 22.6114 36.593 21.754 36.608 20.7419C36.6234 19.7022 36.703 18.5835 36.791 18.17C36.8766 17.7674 36.9461 17.4171 36.9454 17.3914C36.9429 17.2973 36.5485 17.3748 35.9804 17.5809ZM3.54097 26.4649C2.02692 27.1431 0.742218 27.7163 0.68601 27.7388C0.629911 27.7612 1.02679 28.3738 1.56816 29.1001C2.30856 30.0936 2.58709 30.5608 2.69245 30.9862C2.82902 31.5373 2.84127 32.6596 2.74999 36.2809C2.73029 37.06 2.74699 37.6965 2.78705 37.6954C3.0116 37.6895 5.52409 36.5097 5.63854 36.3565C5.71364 36.256 5.84144 35.9268 5.92255 35.6249C6.00366 35.3229 6.17663 34.9754 6.30686 34.8527C6.55047 34.623 8.7968 33.2439 9.741 32.7443L10.272 32.4634L10.1839 32.0178C9.97459 30.9586 8.90451 27.7347 8.63927 27.3644C8.13599 26.6615 6.66446 25.2 6.47646 25.2162C6.37597 25.2248 5.05502 25.7868 3.54097 26.4649ZM58.4418 28.9546C61.3713 29.0045 61.6411 29.0769 62.1888 29.9585C62.3734 30.2556 64.5447 34.1345 67.0139 38.5783C70.2345 44.3742 71.5539 46.6553 71.6819 46.6488C71.7995 46.6428 73.4652 43.8949 76.5623 38.5977C79.1483 34.1745 81.3958 30.3656 81.5567 30.1332C82.0049 29.4857 82.4139 29.2763 83.2761 29.253C83.927 29.2352 84.0493 29.2656 84.3433 29.5179C84.5526 29.6975 85.7205 31.6612 87.5003 34.8257L90.3252 39.8486L90.1717 52.5836C90.0282 64.5006 90.0054 65.3368 89.818 65.6023C89.7079 65.7583 89.4512 65.9719 89.2475 66.0769C88.9051 66.2534 88.6146 66.2646 85.3806 66.2263C81.5192 66.1806 81.3163 66.1469 80.9832 65.4965C80.8276 65.1928 80.8224 64.1852 80.9307 55.4898C80.9969 50.1718 81.0267 45.7844 80.997 45.74C80.9672 45.6955 80.8787 45.6609 80.8003 45.663C80.7218 45.665 79.3761 47.9483 77.8097 50.7367C76.2433 53.5251 74.8249 56.0073 74.6576 56.2528C74.4904 56.4982 74.1554 56.8148 73.9132 56.9565C73.4855 57.2066 73.418 57.2135 71.5638 57.1972C68.6725 57.1719 69.2884 57.8101 65.6572 51.0764C63.5017 47.0793 62.6029 45.5086 62.4729 45.5109C62.2299 45.5152 62.229 45.5455 62.1124 56.1365C62.0065 65.7696 62.0323 65.4358 61.3682 65.794C61.0564 65.9623 60.7174 65.9755 57.5234 65.9441C53.6114 65.9056 53.4033 65.8711 53.0545 65.2023C52.8726 64.8536 52.8738 63.8836 53.0765 47.3615C53.2269 35.11 53.3282 29.8192 53.4157 29.6542C53.4844 29.5247 53.6676 29.3155 53.8229 29.1893C54.1589 28.9162 54.6707 28.8902 58.4418 28.9546ZM151.359 27.1282C155.015 27.1623 155.126 27.188 155.907 28.1698C156.166 28.4956 158.315 31.4102 160.683 34.6467C163.229 38.1262 165.058 40.5312 165.159 40.5312C165.255 40.5312 167.42 37.8437 170.168 34.3118C172.83 30.8911 175.147 27.9711 175.318 27.8229C175.488 27.6746 175.809 27.5152 176.03 27.4686C176.25 27.422 178.178 27.3981 180.313 27.4156C184.427 27.4492 184.593 27.4696 184.957 27.982C185.27 28.4239 185.204 28.8131 184.696 29.5098C184.441 29.8603 181.238 34.1926 177.578 39.1372C173.918 44.0818 170.947 48.1811 170.974 48.2467C171.002 48.3125 174.294 52.9005 178.292 58.4424C182.289 63.9843 185.562 68.6157 185.565 68.7344C185.575 69.1252 185.279 69.6961 184.996 69.8316C184.666 69.9893 176.546 69.9851 175.832 69.8268C175.599 69.7752 175.216 69.561 174.982 69.3509C174.748 69.1409 172.379 66.0704 169.718 62.5277C167.057 58.985 164.835 56.0415 164.782 55.9864C164.721 55.9243 164.6 55.9725 164.464 56.1138C164.342 56.2389 161.978 59.3044 159.209 62.926C154.821 68.6672 154.113 69.5434 153.687 69.7652L153.199 70.0195L148.943 69.9698C146.602 69.9426 144.557 69.8731 144.398 69.8156C144.033 69.6835 143.804 69.2959 143.806 68.8126C143.806 68.5284 143.95 68.2472 144.398 67.654C146.843 64.4192 158.755 48.2598 158.777 48.1491C158.792 48.0724 155.78 43.6943 152.082 38.42C148.385 33.1456 145.308 28.6785 145.244 28.4931C145.09 28.0474 145.289 27.5388 145.728 27.2544C146.017 27.0674 146.198 27.0439 147.152 27.0697C147.753 27.0859 149.647 27.1122 151.359 27.1282ZM94.34 29.3189C97.7958 29.3719 97.8549 29.3821 98.5288 30.0397C98.7453 30.2509 100.327 33.0006 102.574 37.072C104.604 40.7489 106.327 43.8174 106.404 43.8905C106.517 43.9985 106.575 43.9868 106.709 43.829C106.801 43.722 108.603 40.68 110.715 37.0692C112.826 33.4584 114.655 30.3866 114.779 30.2432C114.903 30.0997 115.215 29.8827 115.473 29.761C115.928 29.5463 116.053 29.5407 119.565 29.5729C122.039 29.5957 123.3 29.648 123.544 29.738C123.771 29.8216 123.974 30.0093 124.101 30.2516C124.283 30.6012 124.286 30.6714 124.144 31.0842C124.059 31.3322 121.152 36.5139 117.685 42.5991L111.381 53.6631L111.324 54.4658C111.293 54.9073 111.246 57.5526 111.22 60.3441C111.168 65.9192 111.177 65.8464 110.48 66.2696C110.154 66.4676 109.973 66.4755 106.392 66.4501C103.094 66.4267 102.591 66.4004 102.188 66.23C101.398 65.8962 101.42 66.1131 101.492 59.5426L101.556 53.7107L95.4166 42.3366C89.0902 30.6162 88.9316 30.2922 89.2982 29.8353C89.6116 29.4446 89.9683 29.2883 90.5673 29.2794C90.8992 29.2744 92.597 29.2923 94.34 29.3189ZM33.0626 32.8344C31.6367 33.783 30.6293 34.5755 30.6345 34.7445C30.6616 35.6318 30.5855 38.1979 30.4817 39.8945C30.3571 41.9319 30.3381 42.045 30.0778 42.3088C29.8192 42.5707 29.8029 42.5741 29.7731 42.3727C29.7557 42.2556 29.7958 40.8605 29.8623 39.2723C29.9288 37.6842 29.9757 36.3734 29.9667 36.3597C29.9248 36.2955 28.0323 37.5449 27.6307 37.9019L27.1786 38.3036L27.1665 39.2513C27.1552 40.1341 27.1327 40.2224 26.837 40.5415C26.5795 40.8197 26.5051 41.0229 26.4418 41.6203C26.3989 42.0253 26.2518 42.8592 26.1151 43.4738C25.9783 44.0883 25.8799 44.6023 25.8966 44.6161C25.996 44.6983 29.41 45.765 30.2287 45.9695C31.9638 46.403 31.776 46.4443 32.1668 45.5438C32.8765 43.9082 34.7508 38.247 35.1622 36.4963C35.5074 35.0274 35.3544 34.0091 34.5768 32.6014C34.4096 32.2987 34.2614 32.0537 34.2475 32.057C34.2336 32.0603 33.7004 32.4101 33.0626 32.8344ZM143.419 29.8469C143.842 29.9038 144.324 30.2411 144.467 30.5811C144.534 30.7421 144.528 34.6249 144.45 41.1971C144.382 46.8962 144.35 51.5812 144.379 51.6081C144.408 51.635 145.578 51.674 146.979 51.6946C149.695 51.7347 149.85 51.764 150.237 52.311C150.471 52.6408 150.606 53.8296 150.46 54.2758C150.302 54.76 146.912 59.2307 146.585 59.3873C146.434 59.4591 145.854 59.5301 145.295 59.545L144.279 59.572L144.229 60.2944C144.201 60.6917 144.186 61.3202 144.195 61.6911C144.205 62.0619 144.164 62.4597 144.105 62.5751C144.046 62.6906 143.378 63.6066 142.62 64.6106C141.579 65.992 141.147 66.4803 140.848 66.6176C140.502 66.776 140.164 66.7946 138.165 66.7649C135.572 66.7263 135.23 66.6489 134.949 66.0357C134.804 65.7207 134.787 65.2433 134.828 62.6282C134.854 60.9557 134.833 59.5505 134.78 59.5058C134.728 59.4609 130.848 59.3868 126.157 59.341C117.728 59.2589 117.625 59.2552 117.277 59.0263C117.081 58.8973 116.878 58.6437 116.819 58.4545C116.723 58.145 116.71 54.2574 116.801 52.8482C116.822 52.5375 116.949 52.0771 117.084 51.8249C117.515 51.0211 133.527 30.393 133.911 30.1473C134.107 30.021 134.471 29.8782 134.718 29.83C135.164 29.743 142.755 29.7578 143.419 29.8469ZM20.1774 35.8897C19.4401 36.4025 18.5831 37.0616 18.2732 37.3542L17.7097 37.8862L17.8626 39.4311C17.9467 40.2809 18.0534 42.3757 18.0997 44.0863L18.1841 47.1964L17.9065 47.3849C17.7539 47.4885 17.6019 47.5482 17.5687 47.5176C17.5357 47.4868 17.4375 45.7551 17.3507 43.669C17.2638 41.583 17.1742 39.8768 17.1515 39.8774C17.1288 39.878 16.7852 40.0887 16.3879 40.3457C15.2415 41.0874 14.4293 41.7659 14.3188 42.0743C14.2625 42.2309 14.2421 42.8506 14.2733 43.4515C14.3246 44.438 14.3083 44.568 14.1056 44.7913C13.7735 45.157 13.6626 45.5623 13.6764 46.3596C13.6833 46.7523 13.6161 47.6763 13.5271 48.4131C13.4381 49.1499 13.3887 49.7905 13.4172 49.8366C13.5863 50.109 19.656 52.5232 20.1394 52.5104C20.4736 52.5015 22.2402 45.4137 22.935 41.2938C23.1712 39.8937 23.1525 38.3829 22.8889 37.581C22.6808 36.9476 21.6875 34.9486 21.5835 34.9539C21.5476 34.9558 20.9148 35.3769 20.1774 35.8897ZM201.975 30.4136C205.923 30.4641 206.123 30.495 206.467 31.1056C206.628 31.3898 206.632 32.3715 206.519 41.7875C206.45 47.4904 206.43 52.1899 206.475 52.2309C206.519 52.2718 207.644 52.3169 208.976 52.331C212.497 52.3684 212.512 52.378 212.519 54.6533C212.522 55.4498 212.509 56.8272 212.49 57.714C212.435 60.2553 212.461 60.237 208.943 60.188C207.537 60.1685 206.453 60.1949 206.4 60.2501C206.348 60.303 206.29 61.6883 206.27 63.3286C206.241 65.7005 206.199 66.3878 206.064 66.6876C205.743 67.3988 205.758 67.3965 201.595 67.3656C197.528 67.3355 197.373 67.3131 197.032 66.7082C196.871 66.4232 196.857 66.0548 196.896 63.2889C196.921 61.584 196.911 60.1618 196.876 60.1285C196.84 60.0952 193.748 60.0359 190.006 59.9967C186.026 59.955 183.079 59.8808 182.908 59.8179C182.49 59.6642 182.36 59.5106 180.505 56.9618L178.834 54.6648L178.852 53.8544C178.864 53.2928 178.941 52.8943 179.101 52.5569C179.308 52.1199 194.709 32.091 195.526 31.1957C196.042 30.6304 196.592 30.4103 197.545 30.3872C197.995 30.3764 199.989 30.3882 201.975 30.4136ZM130.554 45.7908C127.387 50.042 126.238 51.6614 126.328 51.7447C126.482 51.8879 134.953 51.9843 135.083 51.8444C135.132 51.7917 135.194 49.6809 135.222 47.1537C135.25 44.6265 135.288 41.9695 135.306 41.2493C135.339 39.9891 135.332 39.9399 135.122 39.9455C134.963 39.9498 133.73 41.5272 130.554 45.7908ZM192.683 46.3391C190.311 49.5251 188.367 52.2081 188.363 52.3015C188.354 52.4965 187.967 52.4779 193.382 52.5422C195.425 52.5663 197.129 52.5552 197.168 52.5173C197.259 52.4291 197.41 40.7668 197.322 40.6354C197.285 40.5813 197.197 40.5391 197.126 40.5416C197.054 40.5443 195.055 43.1532 192.683 46.3391ZM11.7938 53.5577C11.7373 53.7222 11.6658 53.9295 11.6351 54.0184C11.578 54.1834 10.332 59.38 10.256 59.7704C10.2217 59.9459 10.4117 60.0911 11.2985 60.5662C11.8949 60.8859 12.8817 61.4485 13.4913 61.8165C14.5224 62.4391 14.6422 62.4847 15.2102 62.4696C15.7255 62.4559 15.863 62.4953 16.0927 62.722C16.5506 63.1745 17.6462 63.7936 17.9736 63.7849C18.2952 63.7763 19.7082 63.2859 20.614 62.8685C21.1342 62.6288 21.1412 62.6191 20.9303 62.4369C20.8116 62.3343 19.3698 61.3323 17.7263 60.21C15.038 58.3744 14.7574 58.155 14.9307 58.024C15.0367 57.9438 15.1952 57.8764 15.283 57.8741C15.558 57.8667 20.8441 61.3624 22.3856 62.571C22.9577 63.0195 23.1519 63.1128 23.4921 63.1026C23.9164 63.0899 26.2774 62.2868 27.2846 61.8127L27.851 61.5459L27.2529 60.547C26.8213 59.826 26.4045 59.3127 25.7555 58.7027C24.9441 57.94 24.7213 57.7984 23.4756 57.2543C20.6695 56.0289 13.8142 53.6358 12.2004 53.3185C11.9396 53.2672 11.8821 53.301 11.7938 53.5577ZM32.5119 58.1244C31.8 58.4691 31.1988 58.7702 31.1758 58.7937C31.0911 58.8801 31.4713 59.1984 33.0562 60.3676C33.9487 61.0259 35.0188 61.8669 35.4342 62.2365C35.8497 62.6061 36.2072 62.8881 36.2289 62.8631C36.2504 62.8382 36.2731 61.7003 36.2793 60.3345L36.2905 57.8515L35.8197 57.9257C35.4507 57.984 35.2172 57.944 34.7411 57.741C34.4068 57.5984 34.0597 57.4854 33.9697 57.4898C33.8797 57.4941 33.2237 57.7798 32.5119 58.1244ZM31.9507 63.6955C31.9555 63.8633 32.2025 64.7873 32.4995 65.7488C33.1486 67.8505 33.5216 69.3828 33.537 70.0111C33.545 70.3402 33.3695 70.9109 32.9326 71.9767C32.594 72.8027 32.341 73.5008 32.3702 73.5279C32.4369 73.5898 36.0782 74.2108 36.1202 74.1675C36.1371 74.1499 36.1693 72.1949 36.1916 69.8228L36.2322 65.51L35.8537 65.159C35.6455 64.9659 35.4736 64.7477 35.4716 64.6741C35.4696 64.6004 35.3289 64.3921 35.1589 64.2111C34.8827 63.9171 34.7212 63.8612 33.6429 63.6862C32.9791 63.5784 32.3249 63.4678 32.1889 63.4403C31.9766 63.3974 31.9431 63.4333 31.9507 63.6955ZM227.245 60.7238C225.667 61.0908 224.537 61.4613 224.373 61.6655C224.025 62.0979 225.154 66.2765 225.797 66.9389C225.953 67.099 226.202 67.1151 227.851 67.0712L229.727 67.0213L230.155 66.5756C231.17 65.5189 231.408 64.3167 230.969 62.4744C230.467 60.367 229.909 60.1047 227.245 60.7238ZM21.3323 66.969C21.3371 67.1368 21.584 68.0608 21.8811 69.0223C22.5302 71.124 22.9032 72.6562 22.9186 73.2846C22.9265 73.6137 22.7511 74.1844 22.3142 75.2502C21.9756 76.0762 21.7211 76.773 21.7485 76.7984C21.7761 76.824 23.0981 77.0699 24.6864 77.3449C26.2747 77.6201 27.7051 77.8682 27.8649 77.8966C28.1322 77.9439 28.1985 77.8741 28.6905 77.0283C29.7574 75.1935 29.8748 74.615 29.8768 71.1813L29.8775 69.9741L27.7418 69.3438C26.5671 68.9972 25.4994 68.6492 25.3692 68.5705C25.2389 68.4919 25.0104 68.2098 24.8612 67.9436C24.7121 67.6775 24.5094 67.3934 24.4108 67.3123C24.3122 67.2311 23.6884 67.0745 23.0246 66.9642C22.3608 66.854 21.7065 66.7413 21.5705 66.7138C21.3582 66.6709 21.3247 66.7068 21.3323 66.969ZM97.1111 86.0358C95.491 86.854 93.9115 88.3803 93.3134 89.7056C92.9587 90.4916 92.53 92.3621 92.2421 94.3806C91.8156 97.3701 92.666 98.5301 95.8173 99.2578C98.0142 99.7651 103.165 100.26 104.145 100.058C104.907 99.9005 105.081 99.5474 105.481 97.3522C105.997 94.522 106.244 89.1938 105.887 88.582C105.677 88.221 105.039 87.9186 102.98 87.2039C102.009 86.8671 100.694 86.4037 100.057 86.1742C98.4881 85.6084 98.0023 85.5856 97.1111 86.0358ZM120.027 86.256C119.938 86.3612 119.698 86.9235 119.495 87.5057C119.135 88.5352 119.13 88.5739 119.311 88.9218C119.57 89.4214 120.376 90.0807 120.881 90.2057C121.114 90.2632 121.631 90.3553 122.03 90.41C123.27 90.5806 123.63 90.2273 123.876 88.5953C124.055 87.4085 124.041 86.5631 123.839 86.4078C123.644 86.2581 121.716 86.0256 120.854 86.0477C120.356 86.0604 120.148 86.1129 120.027 86.256Z" fill="black" />
    </svg>

  )
}

export default LogoWithTracks
