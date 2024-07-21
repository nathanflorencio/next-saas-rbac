import { api } from '@/http/api-client'

export async function rejectInvite(inviteId: string) {
  await api.post(`invites/${inviteId}/reject`)
}
