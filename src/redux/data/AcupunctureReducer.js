export const Data = 'Data'
export const Error = 'error'
export const Filter = 'filter'
export const AcuData = 'acudata'
export const ActiveNav = "activenav"
export const AcuPageLink = 'pagelink'

const initialState = {
    data: [],
    loading: true,
    error: false,
    filter: 'all',
    acudata: {},
    nav: "Profile",
    acupagelink: ''
}


const AcupuntureReducer = (state = initialState, action) => {
    
    const acuData = state.acudata 
    const DatA = state.data
    const NaV = state.nav
    const ErroR = state.error
    const LoadinG = state.loading
    const AcuPageLinK = state.acupagelink
    const payload = action.payload

    switch(action.type){
        
        case Data : 
            return {
                ...state,
                data : payload,
                loading : false,
                error: false,
            }

        case Error : 
            return {
                data: [],
                error: payload,
                loading: false,
                acudata: acuData,
                filter: 'all',
                nav: NaV,
                acupagelink: AcuPageLinK
            }
        
        case Filter : 
            return {
                ...state,
                filter: payload

            }
        
        case AcuData :
            return {
                ...state,
                acudata: payload,
            }

        case ActiveNav : 
            return {
                ...state,
                nav: payload
            }

        case AcuPageLink : 
            return {
                ...state,
                acupagelink: payload
            }
    }
    return state
}
export default AcupuntureReducer;