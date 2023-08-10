interface EngineProps {
  fillColor: string,
  height: string,
  width: string,
}

const Engine = (props: EngineProps) => {
  const { fillColor = '#4B4D57', height = '32', width = '32' } = props

  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 6H7C6.73478 6 6.48043 5.89464 6.29289 5.70711C6.10536 5.51957 6 5.26522 6 5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4H25C25.2652 4 25.5196 4.10536 25.7071 4.29289C25.8946 4.48043 26 4.73478 26 5C26 5.26522 25.8946 5.51957 25.7071 5.70711C25.5196 5.89464 25.2652 6 25 6Z" fill={fillColor} />
      <path d="M23 0H9C8.20435 0 7.44129 0.31607 6.87868 0.87868C6.31607 1.44129 6 2.20435 6 3V12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13C7.26522 13 7.51957 12.8946 7.70711 12.7071C7.89464 12.5196 8 12.2652 8 12V3C8 2.73478 8.10536 2.48043 8.29289 2.29289C8.48043 2.10536 8.73478 2 9 2H23C23.2652 2 23.5196 2.10536 23.7071 2.29289C23.8946 2.48043 24 2.73478 24 3V17H21.91C21.44 14.54 19.23 13 16 13C12.77 13 10.56 14.54 10.09 17H8V16C8 15.7348 7.89464 15.4804 7.70711 15.2929C7.51957 15.1054 7.26522 15 7 15C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16V18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19H11C11.2652 19 11.5196 18.8946 11.7071 18.7071C11.8946 18.5196 12 18.2652 12 18C11.9786 17.5829 12.0583 17.1669 12.2325 16.7873C12.4066 16.4077 12.6699 16.0758 13 15.82V23C12.1605 23.6296 11.5403 24.5075 11.2274 25.5092C10.9145 26.5108 10.9247 27.5856 11.2566 28.5811C11.5884 29.5767 12.2251 30.4426 13.0764 31.0562C13.9278 31.6698 14.9506 32 16 32C17.0494 32 18.0722 31.6698 18.9236 31.0562C19.7749 30.4426 20.4116 29.5767 20.7434 28.5811C21.0753 27.5856 21.0855 26.5108 20.7726 25.5092C20.4597 24.5075 19.8395 23.6296 19 23V15.8C19.333 16.0578 19.5981 16.3929 19.7723 16.7762C19.9466 17.1596 20.0247 17.5796 20 18C20 18.2652 20.1054 18.5196 20.2929 18.7071C20.4804 18.8946 20.7348 19 21 19H25C25.2652 19 25.5196 18.8946 25.7071 18.7071C25.8946 18.5196 26 18.2652 26 18V3C26 2.20435 25.6839 1.44129 25.1213 0.87868C24.5587 0.31607 23.7956 0 23 0V0ZM17.49 24.41C18.0619 24.7402 18.5089 25.2499 18.7616 25.86C19.0144 26.4702 19.0587 27.1466 18.8878 27.7845C18.7169 28.4224 18.3402 28.9861 17.8163 29.3881C17.2924 29.7902 16.6504 30.0081 15.99 30.0081C15.3296 30.0081 14.6876 29.7902 14.1637 29.3881C13.6398 28.9861 13.2631 28.4224 13.0922 27.7845C12.9213 27.1466 12.9656 26.4702 13.2184 25.86C13.4711 25.2499 13.9181 24.7402 14.49 24.41C14.6393 24.3215 14.763 24.1957 14.8489 24.0449C14.9348 23.8941 14.98 23.7235 14.98 23.55V15.07C15.6433 14.975 16.3167 14.975 16.98 15.07V23.55C16.9821 23.7255 17.0303 23.8974 17.1198 24.0483C17.2093 24.1993 17.337 24.324 17.49 24.41Z" fill={fillColor} />
      <path d="M16 26C15.8022 26 15.6089 26.0586 15.4444 26.1685C15.28 26.2784 15.1518 26.4346 15.0761 26.6173C15.0004 26.8 14.9806 27.0011 15.0192 27.1951C15.0578 27.3891 15.153 27.5673 15.2929 27.7071C15.4327 27.847 15.6109 27.9422 15.8049 27.9808C15.9989 28.0194 16.2 27.9996 16.3827 27.9239C16.5654 27.8482 16.7216 27.72 16.8315 27.5556C16.9414 27.3911 17 27.1978 17 27C17 26.7348 16.8946 26.4804 16.7071 26.2929C16.5196 26.1054 16.2652 26 16 26Z" fill={fillColor} />
      <path d="M16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11Z" fill={fillColor} />
    </svg>
  )
}

export default Engine