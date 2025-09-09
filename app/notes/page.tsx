'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  type Note = {
    id: number
    title: string
  }

  const [notes, setNotes] = useState<Note[] | null>(null)

  useEffect(() => {
    const supabase = createClient()
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes((data as Note[]) ?? null)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}