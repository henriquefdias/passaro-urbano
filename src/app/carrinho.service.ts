import { ItemCarrinho } from "./shared/item-carrinho.model";
import { Oferta } from "./shared/oferta.model";

class CarrinhoService {
    public itens: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[] {
        return this.itens
    }

    public incluirItem(oferta: Oferta): void {
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )

        //verificar se o item ja existe em this.itens
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade++;
        } else {
            this.itens.push(itemCarrinho)
        }
    }
}

export { CarrinhoService }