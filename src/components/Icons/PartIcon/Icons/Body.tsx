interface BodyProps {
  fillColor: string,
  height: string,
  width: string,
}

const Body = (props: BodyProps) => {
  const { fillColor = '#4B4D57', height = '32', width = '32' } = props

  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_612_8636)">
        <path d="M26.9991 18H6.99908C6.73387 18 6.47951 17.8946 6.29198 17.7071C6.10444 17.5196 5.99908 17.2652 5.99908 17C5.99908 12.13 5.89908 12.1 6.25908 11.71L10.0491 7.57C11.0795 6.44513 12.3325 5.54686 13.7287 4.93227C15.1249 4.31768 16.6336 4.0002 18.1591 4H26.9991C27.2643 4 27.5187 4.10536 27.7062 4.29289C27.8937 4.48043 27.9991 4.73478 27.9991 5V17C27.9991 17.2652 27.8937 17.5196 27.7062 17.7071C27.5187 17.8946 27.2643 18 26.9991 18ZM7.99908 16H25.9991V6H18.1591C16.912 6.0008 15.6786 6.26078 14.5373 6.76345C13.396 7.26611 12.3716 8.00049 11.5291 8.92L7.99908 12.77V16Z" fill={fillColor} />
        <path d="M30.9996 7C31.2648 7 31.5192 6.89464 31.7067 6.70711C31.8942 6.51957 31.9996 6.26522 31.9996 6V1C31.9996 0.734784 31.8942 0.48043 31.7067 0.292893C31.5192 0.105357 31.2648 0 30.9996 0L18.1596 0C16.0804 0.00274537 14.0244 0.435974 12.1209 1.2724C10.2174 2.10883 8.50777 3.33034 7.09958 4.86C-0.290417 12.93 -0.000417316 12.45 -0.000417316 13V23C-0.000417316 23.2652 0.10494 23.5196 0.292476 23.7071C0.480012 23.8946 0.734366 24 0.999583 24H1.93958C3.91846 24.006 5.82756 24.7318 7.31065 26.0419C8.79374 27.352 9.7495 29.157 9.99958 31.12C10.0291 31.3639 10.1473 31.5884 10.3317 31.7507C10.5162 31.913 10.7539 32.0018 10.9996 32H30.9996C31.2648 32 31.5192 31.8946 31.7067 31.7071C31.8942 31.5196 31.9996 31.2652 31.9996 31V10C31.9996 9.73478 31.8942 9.48043 31.7067 9.29289C31.5192 9.10536 31.2648 9 30.9996 9C30.7344 9 30.48 9.10536 30.2925 9.29289C30.1049 9.48043 29.9996 9.73478 29.9996 10V26H9.99958C9.06332 24.7632 7.85449 23.7589 6.46702 23.0651C5.07955 22.3714 3.55081 22.0069 1.99958 22V13.39L8.57958 6.22C9.7967 4.891 11.2768 3.82957 12.926 3.1031C14.5752 2.37663 16.3575 2.00098 18.1596 2H29.9996V6C29.9996 6.26522 30.1049 6.51957 30.2925 6.70711C30.48 6.89464 30.7344 7 30.9996 7ZM29.9996 28V30H11.8396C11.6954 29.3107 11.474 28.6398 11.1796 28H29.9996Z" fill={fillColor} />
        <path d="M23 20C22.7348 20 22.4804 20.1054 22.2929 20.2929C22.1054 20.4804 22 20.7348 22 21C22 21.2652 22.1054 21.5196 22.2929 21.7071C22.4804 21.8946 22.7348 22 23 22H27C27.2652 22 27.5196 21.8946 27.7071 21.7071C27.8946 21.5196 28 21.2652 28 21C28 20.7348 27.8946 20.4804 27.7071 20.2929C27.5196 20.1054 27.2652 20 27 20H23Z" fill={fillColor} />
      </g>
    </svg>
  )
}

export default Body
