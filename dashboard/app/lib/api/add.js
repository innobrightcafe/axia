import { useRouter } from 'next/router';
export const handleAdd = async (e) => {
    e.preventDefault();
    const router = useRouter();
    const apiUrl = `${process.env.APIURL}/signup`;
    const fields = Array.from(e.CurrentTarget.elements)
    const user = fields.filter(({type}) => type !== 'submit').reduce((prev, curr) => {
        prev[curr.name] = curr.value;
        return prev;
    }, {});

    const result = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(user),
    }).then(res => res.json());

    if (result?.data?.id) {
        router.push('/usersdashboard');
    }

}

export const handleDelete = async (e) => {
    e.preventDefault();
    const router = useRouter();
    const apiUrl = `${process.env.APIURL}/delete`;
    const fields = Array.from(e.CurrentTarget.elements)
    const user = fields.filter(({type}) => type !== 'submit').reduce((prev, curr) => {
        prev[curr.name] = curr.value;
        return prev;
    }, {});

    const result = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
            id: router.query.id
        })
    }).then(res => res.json());

    if (result?.result?.deleted_hashes?.includes(router.query.id) ) {
        router.push('/usersdashboard/users');
    }

}


export const handleUpdate = async (e) => {
    e.preventDefault();
    const router = useRouter();
    const apiUrl = `${process.env.APIURL}/update`;
    const fields = Array.from(e.CurrentTarget.elements)
    const user = fields.filter(({type}) => type !== 'submit').reduce((prev, curr) => {
        prev[curr.name] = curr.value;
        return prev;
    }, {});

    const result = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
            ...user,
            id: router.query.id
        }),
    }).then(res => res.json());

    if (result?.result?.update_hashes?.includes(router.query.id)) {
        router.push('/usersdashboard/users');
    }

}