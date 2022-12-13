import type { ManufacturerType, Prisma, PrismaClient } from '@prisma/client'

// Manufacturers
const seedFn = (prisma: PrismaClient, manufacturerTypes: ManufacturerType[]) => {

  // Parts
  const partManufacturerType = manufacturerTypes.find((manufacturerType) => manufacturerType.key === 'part')

  const partManufacturers: Prisma.ManufacturerCreateArgs['data'][] = [
    {
      key: 'outback_armour',
      title: 'Outback Armour',
      manufacturerTypeId: partManufacturerType?.id,
    },
    {
      key: 'redarc',
      title: 'REDARC',
      manufacturerTypeId: partManufacturerType?.id,
    },
    {
      key: 'toyota_genuine_accessories',
      title: 'Toyota Genuine Accessories',
      manufacturerTypeId: partManufacturerType?.id,
    },
  ]

  // Vehicles
  const vehicleManufacturerType = manufacturerTypes.find((manufacturerType) => manufacturerType.key === 'vehicle')

  const vehicleManufacturers: Prisma.ManufacturerCreateArgs['data'][] = [
    {
      key: 'ford',
      title: 'Ford',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'toyota',
      title: 'Toyota',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'mazda',
      title: 'Mazda',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'mitsubishi',
      title: 'Mitsubishi',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'nissan',
      title: 'Nissan',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'isuzu',
      title: 'Isuzu',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'jeep',
      title: 'Jeep',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'volkswagen',
      title: 'Volkswagen',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'suzuki',
      title: 'Suzuki',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'ram',
      title: 'Ram',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'land_rover',
      title: 'Land Rover',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'gmc',
      title: 'GMC',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'chevrolet',
      title: 'Chevrolet',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'daihatsu',
      title: 'Daihatsu',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
    {
      key: 'holden',
      title: 'Holden',
      manufacturerTypeId: vehicleManufacturerType?.id,
    },
  ]

  // Merge Manufacturers
  const mergedManufacturers = [
    ...partManufacturers,
    ...vehicleManufacturers,
  ]

  return mergedManufacturers.map(async (data: Prisma.ManufacturerCreateArgs['data']) => {
    const record = await prisma.manufacturer.upsert({
      where: { key: data.key },
      update: data,
      create: data,
    })

    return record
  })
}

export default seedFn
