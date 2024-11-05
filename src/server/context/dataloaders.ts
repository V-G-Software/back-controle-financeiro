import { type Knex } from 'knex'
import type DataLoader from 'dataloader'

import { isNil } from '@/support/utils'
import { builder as builders } from '@/domains/dataloaders'

interface Dataloaders {}

type Dataloader = keyof Dataloaders

const buildDataloaders = (conn: Knex): Dataloaders => {
  return new Proxy(
    {},
    {
      get(target, prop) {
        const old = target[prop]

        if (!isNil(old)) {
          return old
        }

        target[prop] = builders[prop](conn)

        return target[prop]
      }
    }
  ) as Dataloaders
}

export { buildDataloaders, type Dataloaders, type Dataloader }
