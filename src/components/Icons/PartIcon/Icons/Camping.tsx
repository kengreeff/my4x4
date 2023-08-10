interface CampingProps {
  fillColor: string,
  height: string,
  width: string,
}

const Camping = (props: CampingProps) => {
  const { fillColor = '#4B4D57', height = '32', width = '32' } = props

  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0069 4.67587C21.4724 4.48424 22.0247 4.66564 22.2657 5.11842L31.289 22.0672C31.3369 22.1571 31.3622 22.271 31.3726 22.3197C31.3798 22.3532 31.3855 22.3844 31.3896 22.4091C31.3917 22.4213 31.3935 22.4333 31.395 22.444L31.3964 22.4545L31.3973 22.4628C31.3976 22.4651 31.4 22.4861 31.4 22.5103V26.4388C31.4 26.9856 30.9421 27.4 30.4141 27.4H3.92976C3.40171 27.4 2.94382 26.9857 2.94382 26.4388V26.0748L2.43833 26.9221C2.16619 27.3784 1.56338 27.529 1.10323 27.2769C0.631151 27.0185 0.452614 26.4267 0.733785 25.9554L3.05971 22.0568L11.5401 5.13921C11.7555 4.70955 12.2765 4.50623 12.7254 4.64556C14.5614 5.21717 15.9643 5.49423 17.2358 5.49694C18.5001 5.49963 19.6592 5.23103 21.0069 4.67587ZM7.16263 25.4776V20.4337C7.16263 19.9596 7.51201 19.5725 7.96585 19.4891L11.44 18.851V9.71743L4.91575 22.7326V25.4776H7.16263ZM10.4207 20.9945L9.13444 21.2307V23.0365L10.4207 20.9945ZM12.4259 21.485L14.9407 25.4776H9.91106L12.4259 21.485ZM15.7173 23.0365L14.4947 21.0955L15.7173 21.3682V23.0365ZM17.6891 25.4776H20.0532V22.7354L13.4118 9.66668V18.8819L16.9232 19.6651C17.3603 19.7626 17.6891 20.1428 17.6891 20.6021V25.4776ZM22.0251 25.4776H22.1754L22.0251 25.291V25.4776ZM24.6826 25.4776H29.4281V23.4715H23.0669L24.6826 25.4776ZM14.7694 8.00775L15.0807 8.49747C15.4403 8.58281 15.9289 8.6874 16.4588 8.76978C16.6164 8.79419 16.7492 8.87705 16.837 8.99155C16.9045 9.0797 16.9454 9.18662 16.9504 9.30007C16.9521 9.33733 16.9498 9.37529 16.9434 9.41352C16.9371 9.45101 16.9268 9.48717 16.9129 9.52163C16.816 9.76289 16.5463 9.92151 16.2714 9.87771C16.1522 9.8592 16.0353 9.83973 15.9211 9.81961L15.7631 9.71743C15.6562 9.70081 15.9972 10.2389 15.8942 10.221L21.651 21.5491H28.7915L20.9229 6.76926C18.5434 7.5882 16.5386 7.56922 14.2918 7.06791L14.7694 8.00775Z" fill={fillColor} />
    </svg>
  )
}

export default Camping