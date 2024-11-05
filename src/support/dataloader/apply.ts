import { type Dataloader } from '@/server/context/dataloaders';
import { isNil } from '../utils';

export async function applyDataloader<ReturnType>(
  dataloaders,
  dataloaderFunction: Dataloader,
  id: string | number
): Promise<ReturnType | null> {
  const result = await dataloaders[dataloaderFunction].load(id);

  if (isNil(result)) {
    return null;
  }

  return await (result as Promise<ReturnType>);
}
