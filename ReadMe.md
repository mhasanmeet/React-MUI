## React & MUI with Vite

MUI is a React based CSS framework. It can integrate Tailwind CSS also. MUI follow Google's material design system. 

install MUI

```npm install @mui/material @emotion/react @emotion/styled```

install Material Icon

```npm install @mui/icons-material```

## Styling 

In MUI you can add styling in two ways 

* Inline Styling

```
    <Modal sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        ......(Others Code....)
    </Modal>
```
* Custom Style Component Making

```
import styled from '@emotion/styled';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

....(React function code....)
....(Others Code...)

<StyledModal>
    ........
    ........
</StyledModal>
```
