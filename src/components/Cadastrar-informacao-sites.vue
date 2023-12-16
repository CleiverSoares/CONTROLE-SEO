<template>
    <div class="container-cadastro">
        <div class="cadastro-inputs">
            <div class="field">
                <label class="label">Nome</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input">
                </div>
            </div>

            <div class="field">
                <label class="label">Url</label>
                <div class="control">
                    <input class="input" type="url" placeholder="Text input">
                </div>
            </div>

            <div class="field">
                <label class="label">Url Google Analytics</label>
                <div class="control">
                    <input class="input" type="email" placeholder="Email input">
                </div>
            </div>

            <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                    <div class="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="label">Informações adicionais</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <div class="cadastro-radio">
            <div class="field">
                <p>tag meta</p>
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="question">
                        Yes
                    </label>
                    <label class="radio">
                        <input type="radio" name="question">
                        No
                    </label>
                </div>
            </div>
        </div>

    </div>
    <div>

        <div class="botoes">
            <button class="button is-link">Submit</button>
            <button class="button is-link is-light">Cancel</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "CadastrarInformacaoSites",
};
</script>
  
<style scoped>
.container-cadastro {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80vh;
}

.cadastro-inputs,
.cadastro-radio {
    width: 40%;
}

.divider {
    width: 1px;
    height: 60vh;
    background-color: #ccc;
    justify-content: center;
    align-items: center;
}

.botoes {
    width: 100%;
    justify-content: center;
}
</style>
  