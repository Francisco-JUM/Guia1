import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed...');
  console.log('Limpiando datos existentes...');
  await prisma.user.deleteMany();
  await prisma.tenant.deleteMany();
  
  console.log('Creando tenants de Francisco...');
  await prisma.tenant.create({ data: { name: 'Desarrollo de Sistemas FJU' } });
  await prisma.tenant.create({ data: { name: 'Ingeniería UNI RUSB' } });
  await prisma.tenant.create({ data: { name: 'Consultoría Tecnológica' } });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });