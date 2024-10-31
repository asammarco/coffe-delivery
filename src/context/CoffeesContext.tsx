import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Coffee {
  id: number
  imageUrl: string
  name: string
  properties: string[]
  description: string
  price: number
}

interface CoffeesContextType {
  coffees: Coffee[]
  fetchCoffees: () => void
}

interface CoffeesProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesProvider({ children }: CoffeesProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  const fetchCoffees = useCallback(async () => {
    const response = await api.get('coffees')

    setCoffees(response.data)
  }, [])

  useEffect(() => {
    fetchCoffees()
  }, [fetchCoffees])

  return (
    <CoffeesContext.Provider value={{ coffees, fetchCoffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}
