export default function (state, { type, payload }) {
    switch (type) {
        case 'SENRYU_TYPED':
            return {
                ...state,
                senryu: payload,
            }
        case 'SENRYU_GENERATED':
            return {
                ...state,
                senryu: payload,
            }

    }
}