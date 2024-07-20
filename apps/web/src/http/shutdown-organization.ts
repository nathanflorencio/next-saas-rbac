import { api } from '@/http/api-client'

interface ShutdownOrganizationRequest {
  org: string
}

export async function shutdownOrganization({
  org,
}: ShutdownOrganizationRequest) {
  await api.delete(`organizations/${org}`)
}
