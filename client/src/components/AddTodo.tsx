import { Button, Group, Modal } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useState } from "react"

export default function AddTodo() {
    const [open, setOpen] = useState(false)

    const form = useForm({
        initialValues: {
            title: '',
            body: ''
        }
    })

    return(
        <>
            <Modal opened={open}
                onClose={() => setOpen(false)}
                title="Create todo"
            >
                Text
            </Modal>

            <Group position="center">
                <Button fullWidth mb={12} onClick={() => setOpen(true)}>
                    ADD TODO
                </Button>
            </Group>
        </>
    )
}