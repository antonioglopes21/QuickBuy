using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Repositorios
{
    public class PedidpRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidpRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }
    }
}
