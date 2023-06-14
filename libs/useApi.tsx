export type getTenantResponse = {
    name: string;
    mainColor:string;
    secondColor:string;
}

export const useApi = () => {{
    
        getTenant: (tenantSlug:string): boolean| getTenantResponse => {
            return{
                name:'ObraTech',
                mainColor:'#D73C0B',
                secondColor:'#E7A885'
            }
        }
}};