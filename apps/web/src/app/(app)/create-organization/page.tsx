import { OrganizationForm } from '@/app/(app)/create-organization/organization-form'

export default function CreateOrganization() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Create organization</h1>

      <OrganizationForm />
    </div>
  )
}
