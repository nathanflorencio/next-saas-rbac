import { redirect } from 'next/navigation'

import { ProjectForm } from '@/app/(app)/org/[slug]/create-project/project-form'
import { ability } from '@/auth/auth'
import { Header } from '@/components/header'

export default async function CreateProject() {
  const permissions = await ability()

  if (permissions?.cannot('create', 'Project')) {
    redirect('/')
  }

  return (
    <div className="space-y-4 py-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200px] space-y-4">
        <h1 className="text-2xl font-bold">Create project</h1>

        <ProjectForm />
      </main>
    </div>
  )
}
