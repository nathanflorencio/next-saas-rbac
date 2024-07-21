import { api } from '@/http/api-client'

export async function acceptInvite(inviteId: string) {
  await api.post(`invites/${inviteId}/accept`)
}
